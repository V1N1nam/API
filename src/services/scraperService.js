const puppeteer = require('puppeteer');

const fetchPromotions = async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();

   // Você pode ajustar esta busca para encontrar promoções específicas.
   // Por exemplo, buscando uma categoria ou usando um termo de busca.
   await page.goto('https://www.amazon.com.br/s?k=promocao-celular');

   const promotions = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.s-main-slot .s-result-item')).map(item => {
         const titleElement = item.querySelector('h2 .a-link-normal');
         const priceElement = item.querySelector('.a-price');
         return {
            title: titleElement ? titleElement.innerText : null,
            price: priceElement ? priceElement.innerText : null,
            link: titleElement ? titleElement.href : null,
         };
      }).filter(promotion => promotion.title && promotion.price); // Filtra itens sem título ou preço
   });

   await browser.close();
   return promotions;
};

module.exports = { fetchPromotions };
