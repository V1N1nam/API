const express = require('express');
const path = require('path');
const promotionsRouter = require('./routes/promotions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/promotions', promotionsRouter);
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});