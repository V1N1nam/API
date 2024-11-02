# 🌟 API de Promoções

Uma API desenvolvida em Node.js que utiliza Puppeteer para realizar scraping de promoções de produtos na Amazon Brasil. Com esta API, os usuários podem facilmente buscar promoções específicas de produtos.

# 🛠️ Tecnologias Utilizadas

 Node.js: Ambiente de execução para JavaScript no servidor

 Express: Framework para construção de APIs

 Puppeteer: Biblioteca para controle do navegador Chrome, utilizada para scraping de dados

 JavaScript: Linguagem de programação utilizada no desenvolvimento

# 📁 Estrutura do Projeto

src/

├── controllers/

│   └── promotionsController.js

├── routes/

│   └── promotions.js

├── services/

│   └── scraperService.js

└── index.js

public/

├── index.html

└── script.js

# 📡 Endpoints

GET /api/promotions

Este endpoint busca promoções de produtos na Amazon Brasil. 🎉

##### Exemplo de chamada:

```bash
curl "http://localhost:3000/api/promotions?search=notebook" 
```

##### Resposta:

A resposta será um array de objetos JSON, cada um representando uma promoção com as seguintes propriedades:

- title: O título do produto em promoção.
- price: O preço do produto em promoção.
- link: O link para a promoção.

##### Exemplo de Resposta:

``` json
[
    {
        "title": "Notebook Dell Inspiron 15",
        "price": "R$ 2.999,00",
        "link": "https://www.amazon.com.br/dp/B08HXYMKRT"
    },
    {
        "title": "Notebook Lenovo Ideapad 3",
        "price": "R$ 3.299,00",
        "link": "https://www.amazon.com.br/dp/B08HXYNK2J"
    }
]
```

# 🛠️ Como Executar o Projeto

##### Clone o repositório:

```bash
git clone https://github.com/V1N1nam/API
cd seu-repositorio
```

##### Instale as dependências:
```bash
npm install
```

##### Execute o servidor:
```bash

node src/index.js
```

# ⚠️ Notas
A API realiza scraping de dados da Amazon, portanto, as promoções podem variar de acordo com a disponibilidade no site. Certifique-se de respeitar as políticas de uso da Amazon ao realizar scraping de dados.

# 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. Experimente agora!