import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless:"new"});
  const page = await browser.newPage();
  await page.goto('https://localhost:3000/');
  await page.setViewport({width: 1080, height: 1024});
  await page.waitForSelector(".App-header");
  console.log("OK");
  await browser.close();
})();