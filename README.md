# 🌟 API de Promoções

Uma API desenvolvida em Node.js que utiliza Puppeteer para realizar scraping de promoções de produtos na Amazon Brasil. Com esta API, os usuários podem facilmente buscar promoções específicas de produtos.

# 🛠️ Tecnologias Utilizadas

 <span style="color: #FF69B4;">Node.js</span>: Ambiente de execução para JavaScript no servidor

 <span style="color: #FF69B4;">Express</span>: Framework para construção de APIs

 <span style="color: #FF69B4;">Puppeteer</span>: Biblioteca para controle do navegador Chrome, utilizada para scraping de dados

 <span style="color: #FF69B4;">JavaScript</span>: Linguagem de programação utilizada no desenvolvimento

# 📁 Estrutura do Projeto

<span style="color: green;">src/
├── controllers/
│   └── promotionsController.js
├── routes/
│   └── promotions.js
├── services/
│   └── scraperService.js
└── index.js</span>
<span style="color: blue;">public/
├── index.html
└── script.js</span>

# 📡 Endpoints

GET /api/promotions

Este endpoint busca promoções de produtos na Amazon Brasil. 🎉

##### Exemplo de chamada:

```bash
curl "http://localhost:3000/api/promotions?search=notebook" 
```

##### Resposta:

A resposta será um array de objetos JSON, cada um representando uma promoção com as seguintes propriedades:

- <span style="color: #FF69B4;">title</span>: O título do produto em promoção.
- <span style="color: #FF69B4;">price</span>: O preço do produto em promoção.
- <span style="color: #FF69B4;">link</span>: O link para a promoção.

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
git clone https://github.com/seuusuario/seu-repositorio.git
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