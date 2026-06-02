import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Desktop screenshot
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: './public/home-desktop.png', fullPage: true });
  console.log('Desktop screenshot saved');
  
  // Mobile screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: './public/home-mobile.png', fullPage: true });
  console.log('Mobile screenshot saved');
  
  await browser.close();
})();
