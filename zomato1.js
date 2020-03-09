const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.zomato.com/perth')

    const result = await page.evaluate(() => {
        let title = document.querySelector('.h-city-home-title')
        return {
            title
        }
    })

    console.log(result)

    browser.close()
})()