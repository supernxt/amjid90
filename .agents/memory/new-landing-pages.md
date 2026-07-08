---
name: New Landing Pages
description: Three new SEO landing pages added to supernxt.com targeting commercial keywords.
---

## Pages Created
- /dubai — Dubai location page (AbuDhabi.tsx pattern, 8 services, 22 coverage areas, FAQ, cross-links to all service pages)
- /n8n-automation — n8n workflow automation (targets "n8n automation UAE", "business process automation Dubai")
- /it-amc — IT Annual Maintenance Contract (targets "IT AMC Dubai", "IT maintenance contract UAE"; includes 3-tier plan comparison)

## Pattern Used
All follow AbuDhabi.tsx structure: SEO component → hero with checklist + image → stats row → services grid → coverage/process section → RelatedServices cross-links → FAQSection → CTA.

## Internal Linking Added
- AISolutions page → cross-links to /n8n-automation and /it-amc (at bottom of page before FAQSection)
- ManagedIT RelatedServices → added /it-amc as first item

## Routing
App.tsx lazy imports + routes added for Dubai, N8nAutomation, ItAmc before FreeAudit route.
