var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default;
var init_vite_config = __esm({
  async "vite.config.ts"() {
    "use strict";
    vite_config_default = defineConfig({
      plugins: [
        react(),
        runtimeErrorOverlay(),
        ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
          await import("@replit/vite-plugin-cartographer").then(
            (m) => m.cartographer()
          ),
          await import("@replit/vite-plugin-dev-banner").then(
            (m) => m.devBanner()
          )
        ] : []
      ],
      resolve: {
        alias: {
          "@": path.resolve(import.meta.dirname, "client", "src"),
          "@shared": path.resolve(import.meta.dirname, "shared"),
          "@assets": path.resolve(import.meta.dirname, "attached_assets")
        }
      },
      root: path.resolve(import.meta.dirname, "client"),
      build: {
        outDir: path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true
      },
      server: {
        fs: {
          strict: true,
          deny: ["**/.*"]
        }
      }
    });
  }
});

// server/vite.ts
var vite_exports = {};
__export(vite_exports, {
  log: () => log,
  serveStatic: () => serveStatic,
  setupVite: () => setupVite
});
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { nanoid } from "nanoid";
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}
var viteLogger;
var init_vite = __esm({
  async "server/vite.ts"() {
    "use strict";
    await init_vite_config();
    viteLogger = createLogger();
  }
});

// server/static.ts
var static_exports = {};
__export(static_exports, {
  serveStatic: () => serveStatic2
});
import express2 from "express";
import fs2 from "fs";
import path3 from "path";
function serveStatic2(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}
var init_static = __esm({
  "server/static.ts"() {
    "use strict";
  }
});

// server/index.ts
import express3 from "express";

// server/routes.ts
import { createServer } from "http";
import nodemailer from "nodemailer";
var INDEXNOW_KEY = "d9cd85c9cabb24c38b4e96056d07fe11";
var SITE_URL = "https://supernxt.com";
var ALL_URLS = [
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
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/ai-automation-uae-businesses-2025`,
  `${SITE_URL}/blog/enterprise-wifi-dubai-hotels-guide`,
  `${SITE_URL}/blog/cctv-solutions-uae-business-guide`,
  `${SITE_URL}/blog/structured-cabling-vs-wireless-uae-office`,
  `${SITE_URL}/blog/managed-it-amc-dubai-guide`,
  `${SITE_URL}/blog/it-amc-cost-dubai-2025`,
  `${SITE_URL}/blog/cctv-installation-dubai-cost-guide`,
  `${SITE_URL}/blog/whatsapp-chatbot-uae-businesses`,
  `${SITE_URL}/blog/fiber-optic-vs-cat6a-uae-offices`,
  `${SITE_URL}/blog/it-support-company-dubai-how-to-choose`,
  `${SITE_URL}/abu-dhabi`,
  `${SITE_URL}/sharjah`,
  `${SITE_URL}/ajman`,
  `${SITE_URL}/ras-al-khaimah`,
  `${SITE_URL}/fujairah`,
  `${SITE_URL}/hotels`,
  `${SITE_URL}/hospitals`,
  `${SITE_URL}/warehouses`,
  `${SITE_URL}/free-audit`
];
async function pingIndexNow(urls = ALL_URLS) {
  try {
    const body = {
      host: "supernxt.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body)
    });
    return { status: res.status, ok: res.ok };
  } catch (err) {
    return { status: 500, ok: false, error: err.message };
  }
}
async function sendContactEmail(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  const phoneRow = data.phone ? `<tr><td style="padding:8px 0;color:#666;width:100px"><strong>Phone</strong></td><td style="padding:8px 0;color:#111;font-size:18px;font-weight:bold"><a href="tel:${data.phone}" style="color:#FF3333;text-decoration:none">${data.phone}</a></td></tr>` : "";
  await transporter.sendMail({
    from: `"SNT Website" <${process.env.SMTP_USER}>`,
    to: "hello@supernxt.com",
    replyTo: data.email,
    subject: `\u{1F514} New Lead: ${data.name} \u2014 ${data.subject || "Website Enquiry"}`,
    text: `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}

${data.message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#FF3333;padding:24px 32px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">\u{1F514} New Lead from Website</h2>
          <p style="color:#fff;opacity:0.85;margin:6px 0 0;font-size:14px">${(/* @__PURE__ */ new Date()).toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (Dubai time)</p>
        </div>
        <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;color:#666;width:100px;vertical-align:top"><strong>Name</strong></td><td style="padding:10px 0;color:#111;font-weight:600">${data.name}</td></tr>
            <tr><td style="padding:10px 0;color:#666;vertical-align:top"><strong>Email</strong></td><td style="padding:10px 0"><a href="mailto:${data.email}" style="color:#FF3333;font-weight:600">${data.email}</a></td></tr>
            ${phoneRow}
            <tr><td style="padding:10px 0;color:#666;vertical-align:top"><strong>Subject</strong></td><td style="padding:10px 0;color:#111">${data.subject || "\u2014"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#666;margin:0 0 8px;font-weight:600">Message</p>
          <p style="color:#111;white-space:pre-wrap;margin:0;line-height:1.6">${data.message}</p>
          ${data.phone ? `
          <div style="margin-top:24px;padding:16px;background:#fff8f8;border:2px solid #FF3333;border-radius:10px;text-align:center">
            <p style="margin:0;color:#666;font-size:13px">Quick Actions</p>
            <p style="margin:8px 0 0">
              <a href="tel:${data.phone}" style="display:inline-block;background:#FF3333;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin-right:8px">\u{1F4DE} Call Now</a>
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}" style="display:inline-block;background:#25D366;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:bold">\u{1F4AC} WhatsApp</a>
            </p>
          </div>` : ""}
        </div>
        <p style="color:#999;font-size:12px;text-align:center;margin-top:16px">Super Next Technologies \xB7 supernxt.com \xB7 hello@supernxt.com</p>
      </div>
    `
  });
}
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email, and message are required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "Invalid email address." });
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[contact] SMTP not configured \u2014 logging form submission instead");
      console.log("[contact]", { name, email, phone, subject, message });
      return res.json({ success: true, message: "Message received (email delivery pending SMTP setup)." });
    }
    try {
      await sendContactEmail({ name, email, phone, subject, message });
      return res.json({ success: true, message: "Message sent successfully." });
    } catch (err) {
      console.error("[contact] Email send failed:", err.message);
      return res.status(500).json({ success: false, error: "Failed to send message. Please try calling or WhatsApp." });
    }
  });
  app2.post("/api/indexnow/ping", async (req, res) => {
    const urls = req.body?.urls;
    const result = await pingIndexNow(urls || ALL_URLS);
    res.json({
      success: result.ok,
      indexnowStatus: result.status,
      urlsSubmitted: urls?.length || ALL_URLS.length,
      message: result.ok ? "IndexNow ping sent successfully to Bing/Yandex" : "IndexNow ping failed"
    });
  });
  app2.get("/api/indexnow/ping", async (_req, res) => {
    const result = await pingIndexNow();
    res.json({
      success: result.ok,
      indexnowStatus: result.status,
      urlsSubmitted: ALL_URLS.length,
      message: result.ok ? "IndexNow ping sent successfully to Bing/Yandex" : "IndexNow ping failed"
    });
  });
  app2.get("/sitemap.xml", (_req, res) => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const urls = ALL_URLS.map((url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url === SITE_URL + "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === SITE_URL + "/" ? "1.0" : url.includes("/blog/") ? "0.7" : "0.8"}</priority>
  </url>`).join("");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(xml);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
function log2(message) {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
  console.log(`${formattedTime} [express] ${message}`);
}
var app = express3();
app.set("env", process.env.NODE_ENV || "development");
app.use(express3.json());
app.use(express3.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log2(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    const { setupVite: setupVite2 } = await init_vite().then(() => vite_exports);
    await setupVite2(app, server);
  } else {
    const { serveStatic: serveStatic3 } = await Promise.resolve().then(() => (init_static(), static_exports));
    serveStatic3(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log2(`serving on port ${port}`);
  });
})();
