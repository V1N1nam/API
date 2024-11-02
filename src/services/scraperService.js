const puppeteer = require('puppeteer');

const fetchPromotions = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('URL');

    const promotions = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.promo-item')).map(item => ({
            title: item.querySelector('.promo-title').innerText,
            price: item.querySelector('.promo-price').innerText,
            link: item.querySelector('a').href
        }));
    });

    await browser.close();
    return promotions;

};

module.exports = { fetchPromotions };