const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const urls = [
    'https://www.cnn.com',
    'https://www.bbc.com',
    'https://www.nationalgeographic.com'
  ];

  const pages = [];

  for (const url of urls) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    pages.push(page);
  }

  // Wait while all pages stay open
  await new Promise(r => setTimeout(r, 60000)); // Keep pages open for 60s

  await browser.close();
})();
