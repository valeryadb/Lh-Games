# Loja de Jogos: CRUD de Produtos com Angular + JSON-server

Atividade **Implementar Service de consumo de API** (Formação Full Stack, SENAI-DF).

Aplicação Angular que consome uma API REST simulada com **JSON-server** para listar, cadastrar, editar e excluir produtos.

## 🛠️ Tecnologias
- Angular 18 (módulos, rotas, HttpClient, FormsModule)
- TypeScript
- Bootstrap 5
- JSON-server 0.17 (API REST fake a partir do `db.json`)

## ✅ Funcionalidades
| Tela | Rota | O que faz | Requisição |
|---|---|---|---|
| Painel Principal | `/painel-principal` | Lista os produtos em tabela | `GET /produtos` |
| Cadastro | `/cadastro-produto` | Cadastra um novo produto | `POST /produtos` |
| Edição | `/cadastro-produto/:id` | Carrega e atualiza um produto | `GET /produtos/:id` e `PUT /produtos/:id` |
| Botão Excluir | (painel) | Remove o produto | `DELETE /produtos/:id` |

## 📂 Estrutura
```
src/app/
├── componentes/
│   ├── menu/               # barra de navegação
│   ├── rodape/             # rodapé fixo
│   ├── painel-principal/   # lista de produtos
│   └── cadastro-produto/   # formulário de cadastro/edição
├── models/produto.ts       # interface Produto
└── servicos/produto.service.ts  # comunicação com a API (GET, POST, PUT, DELETE)
db.json                     # "banco de dados" do JSON-server
public/assets/imagens/      # imagens dos produtos
```

## ▶️ Como executar
```bash
npm install
```
Abra **dois terminais** (Git Bash ou Prompt de Comando) na pasta do projeto:

```bash
# Terminal 1 – API
npm run api            # ou: npx json-server --watch db.json
```
```bash
# Terminal 2 – Angular
ng serve               # ou: npm start
```
Acesse `http://localhost:4200`. A API fica em `http://localhost:3000/produtos`.

## 👩‍💻 Autora
Valerya Dias · [LinkedIn](https://linkedin.com/in/valerya-dias) · [GitHub](https://github.com/valeryadb)
