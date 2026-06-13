import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const INDEXNOW_KEY = "d9cd85c9cabb24c38b4e96056d07fe11";
const SITE_URL = "https://supernxt.com";

const ALL_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/ai-solutions`,
  `${SITE_URL}/wireless-hotspot`,
  `${SITE_URL}/infrastructure`,
  `${SITE_URL}/website-development`,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/templates`,
  `${SITE_URL}/case-studies`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/support`,
  `${SITE_URL}/legal/privacy`,
  `${SITE_URL}/legal/eula`,
];

async function pingIndexNow(urls: string[] = ALL_URLS) {
  try {
    const body = {
      host: "supernxt.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    return { status: res.status, ok: res.ok };
  } catch (err: any) {
    return { status: 500, ok: false, error: err.message };
  }
}

export async function registerRoutes(app: Express): Promise<Server> {

  // IndexNow ping — POST /api/indexnow/ping
  // Notifies Bing, Yandex, and other IndexNow search engines of updated URLs
  app.post("/api/indexnow/ping", async (req, res) => {
    const urls: string[] | undefined = req.body?.urls;
    const result = await pingIndexNow(urls || ALL_URLS);
    res.json({
      success: result.ok,
      indexnowStatus: result.status,
      urlsSubmitted: urls?.length || ALL_URLS.length,
      message: result.ok
        ? "IndexNow ping sent successfully to Bing/Yandex"
        : "IndexNow ping failed",
    });
  });

  // GET /api/indexnow/ping — convenience endpoint for manual triggers
  app.get("/api/indexnow/ping", async (_req, res) => {
    const result = await pingIndexNow();
    res.json({
      success: result.ok,
      indexnowStatus: result.status,
      urlsSubmitted: ALL_URLS.length,
      message: result.ok
        ? "IndexNow ping sent successfully to Bing/Yandex"
        : "IndexNow ping failed",
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
