const scraperService = require('../services/scraperService');

const getPromotions = async (req, res) => {
    try{
        const promotions = await scraperService.fetchPromotions();
        res.json(promotions);
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar promoções', error});
    }
};

module.exports = { getPromotions };