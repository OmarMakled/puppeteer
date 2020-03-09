const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.zomato.com/');

//     // Get the "viewport" of the page, as reported by the page.
//     const dimensions = await page.evaluate(() => {
//         return {
//             width: document.documentElement.clientWidth,
//             height: document.documentElement.clientHeight,
//             deviceScaleFactor: window.devicePixelRatio
//         };
//     });

//     console.log('Dimensions:', dimensions);

//     await browser.close();
// })();

// (async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.google.com/')
//     page.on('dialog', async dialog => {
//         console.log(dialog.message())
//         await dialog.dismiss()
//     })
//     await page.evaluate(() => alert('This message is inside an alert box'))
//     await browser.close()
// })();


// (async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.olx.com.eg/en/ad/8-IDaVUN9.html')

//     const [el] = await page.$x('//*[@id="offerdescription"]/div[1]/div/div/div/div/img');
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();
//     console.log({
//         srcTxt
//     });
//     await browser.close()
// })()

// (async () => {
//     const browser = await puppeteer.launch({
//         ignoreDefaultArgs: true
//     });
//     const page = await browser.newPage();
//     await page.goto('https://www.zomato.com/about');
//     await page.screenshot({
//         path: 'example.png'
//     });

//     await browser.close();
// })();

// (async () => {
//     const browser = await puppeteer.launch({
//         args: ['--no-sandbox'],
//         headless: true,
//     });
//     const page = await browser.newPage()
//     await page.goto('https://www.zomato.com/about')

//     const el = await page.$x('//*[@id="root"]/div[3]/h1');

//     // const text = await el.getProperty('textContent');
//     // const txt = await text.jsonValue();
//     console.log(el);
//     await browser.close()
// })()