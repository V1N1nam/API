const express = require('express');
const { getPromotions } = require('../controllers/promotionsController');

const router = express.Router();

router.get('/', getPromotions);

module.exports = router;