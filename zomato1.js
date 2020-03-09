const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.goto('https://www.zomato.com/perth')

    const result = await page.evaluate(() => {
        let title = document.querySelector('.h-city-home-title').textContent
        return {
            title
        }
    })

    console.log(result)

    browser.close()
})()