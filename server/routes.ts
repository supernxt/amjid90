import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import path from "path";

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
  `${SITE_URL}/free-audit`,
  /* Network Analyzer & Tools Hub */
  `${SITE_URL}/analyzer/`,
  `${SITE_URL}/tools/`,
  `${SITE_URL}/tools/speed-test/`,
  `${SITE_URL}/tools/fastest-dns-finder/`,
  `${SITE_URL}/tools/dns-benchmark/`,
  `${SITE_URL}/tools/ttl-analyzer/`,
  `${SITE_URL}/tools/ping-latency-test/`,
  `${SITE_URL}/tools/packet-loss-test/`,
  `${SITE_URL}/tools/wifi-quality-analyzer/`,
  `${SITE_URL}/tools/isp-performance-checker/`,
  `${SITE_URL}/tools/ip-information-lookup/`,
  `${SITE_URL}/tools/network-health-assessment/`,
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

async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const phoneRow = data.phone
    ? `<tr><td style="padding:8px 0;color:#666;width:100px"><strong>Phone</strong></td><td style="padding:8px 0;color:#111;font-size:18px;font-weight:bold"><a href="tel:${data.phone}" style="color:#FF3333;text-decoration:none">${data.phone}</a></td></tr>`
    : "";

  await transporter.sendMail({
    from: `"SNT Website" <${process.env.SMTP_USER}>`,
    to: "hello@supernxt.com",
    replyTo: data.email,
    subject: `🔔 New Lead: ${data.name} — ${data.subject || "Website Enquiry"}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nSubject: ${data.subject}\n\n${data.message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#FF3333;padding:24px 32px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">🔔 New Lead from Website</h2>
          <p style="color:#fff;opacity:0.85;margin:6px 0 0;font-size:14px">${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (Dubai time)</p>
        </div>
        <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;color:#666;width:100px;vertical-align:top"><strong>Name</strong></td><td style="padding:10px 0;color:#111;font-weight:600">${data.name}</td></tr>
            <tr><td style="padding:10px 0;color:#666;vertical-align:top"><strong>Email</strong></td><td style="padding:10px 0"><a href="mailto:${data.email}" style="color:#FF3333;font-weight:600">${data.email}</a></td></tr>
            ${phoneRow}
            <tr><td style="padding:10px 0;color:#666;vertical-align:top"><strong>Subject</strong></td><td style="padding:10px 0;color:#111">${data.subject || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#666;margin:0 0 8px;font-weight:600">Message</p>
          <p style="color:#111;white-space:pre-wrap;margin:0;line-height:1.6">${data.message}</p>
          ${data.phone ? `
          <div style="margin-top:24px;padding:16px;background:#fff8f8;border:2px solid #FF3333;border-radius:10px;text-align:center">
            <p style="margin:0;color:#666;font-size:13px">Quick Actions</p>
            <p style="margin:8px 0 0">
              <a href="tel:${data.phone}" style="display:inline-block;background:#FF3333;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin-right:8px">📞 Call Now</a>
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="display:inline-block;background:#25D366;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:bold">💬 WhatsApp</a>
            </p>
          </div>` : ""}
        </div>
        <p style="color:#999;font-size:12px;text-align:center;margin-top:16px">Super Next Technologies · supernxt.com · hello@supernxt.com</p>
      </div>
    `,
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the Super Network Analyzer static HTML. Registered before Vite middleware
  // so it works in dev. Non-strict routing means this matches /analyzer AND /analyzer/.
  app.get("/analyzer", (_req, res) => {
    const isProd = process.env.NODE_ENV === "production";
    const filePath = path.resolve(
      isProd ? "dist/public/analyzer/index.html" : "client/public/analyzer/index.html"
    );
    res.setHeader("Cache-Control", "no-store");
    res.sendFile(filePath);
  });


  // Contact form — POST /api/contact
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email, and message are required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "Invalid email address." });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("[contact] SMTP not configured — logging form submission instead");
      console.log("[contact]", { name, email, phone, subject, message });
      return res.json({ success: true, message: "Message received (email delivery pending SMTP setup)." });
    }

    try {
      await sendContactEmail({ name, email, phone, subject, message });
      return res.json({ success: true, message: "Message sent successfully." });
    } catch (err: any) {
      console.error("[contact] Email send failed:", err.message);
      return res.status(500).json({ success: false, error: "Failed to send message. Please try calling or WhatsApp." });
    }
  });

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

  // GET /sitemap.xml — dynamically generated sitemap for Google Search Console
  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().split("T")[0];
    const urls = ALL_URLS.map(url => `
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

  const httpServer = createServer(app);
  return httpServer;
}
