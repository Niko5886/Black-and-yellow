const { chromium } = require('playwright');

async function capturePages() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.createContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

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
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `c:\Users\lobid\OneDrive\Desktop\Nymerix New\nymerix-web\public\${p.name}` });
      console.log(`✓ ${p.name}`);
    } catch (e) {
      console.error(`✗ ${p.name}: ${e.message}`);
    }
  }

  // Mobile snapshots
  const mobile = await browser.createContext({ viewport: { width: 375, height: 812 } });
  const mobilePage = await mobile.newPage();
  
  for (const p of pages) {
    try {
      await mobilePage.goto(p.url, { waitUntil: 'networkidle' });
      const mobileFile = p.name.replace('.png', '-mobile.png');
      await mobilePage.screenshot({ path: `c:\Users\lobid\OneDrive\Desktop\Nymerix New\nymerix-web\public\${mobileFile}` });
      console.log(`✓ ${mobileFile}`);
    } catch (e) {
      console.error(`✗ ${mobileFile}: ${e.message}`);
    }
  }

  await browser.close();
}

capturePages();
