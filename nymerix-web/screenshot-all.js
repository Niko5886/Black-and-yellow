const { chromium } = require('playwright');

async function capturePages() {
  const browser = await chromium.launch({ headless: true });

  const pages = [
    { url: 'http://localhost:3000/', name: 'home-desktop.png' },
    { url: 'http://localhost:3000/ui-ux-design', name: 'ui-ux-design-desktop.png' },
    { url: 'http://localhost:3000/it-strategy', name: 'it-strategy-desktop.png' },
    { url: 'http://localhost:3000/cloud-solutions', name: 'cloud-solutions-desktop.png' },
    { url: 'http://localhost:3000/careers', name: 'careers-desktop.png' },
    { url: 'http://localhost:3000/not-found', name: '404-desktop.png' },
  ];

  for (const p of pages) {
    try {
      const context = await browser.createBrowserContext ? await browser.createContext({ viewport: { width: 1280, height: 800 } }) : null;
      const page = await browser.newPage();
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `public/${p.name}`, fullPage: false });
      console.log(`✓ ${p.name}`);
      await page.close();
    } catch (e) {
      console.error(`✗ ${p.name}: ${e.message}`);
    }
  }

  await browser.close();
}

capturePages();
