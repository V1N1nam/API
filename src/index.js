const express = require('express');
const promotionsRouter = require('./routes/promotions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/promotions', promotionsRouter);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});