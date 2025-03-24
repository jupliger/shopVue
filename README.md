# ShopVue 🛒

Um e-commerce moderno desenvolvido com Vue.js 3, Pinia e Fake Store API. Projeto ideal para portfólio, demonstrando gerenciamento de estado, consumo de API e UI responsiva.

## 🔧 Tecnologias Utilizadas

- **Vue 3** (Composition API)
- **Pinia** (gerenciamento de estado do carrinho)
- **Fake Store API** ([https://fakestoreapi.com](https://fakestoreapi.com))
- **Vue Router** (navegação entre páginas)
- **Tailwind CSS** (estilização)
- **Axios** (chamadas HTTP)

## 🎯 Funcionalidades Principais

### 🏠 Página Inicial
- Listagem de produtos em grid
- Barra de busca por nome
- Filtro por categorias (`/products/categories`)

### 📄 Página de Produto
- Galeria de imagens
- Detalhes do produto (título, descrição, avaliação)
- Seletor de quantidade
- Botão "Adicionar ao Carrinho"

### 🛒 Carrinho de Compras
- Lista de itens com quantidade ajustável
- Cálculo automático do total
- Persistência no `localStorage`

### 💰 Checkout Simulado
- Formulário com validação
- Modal de confirmação de compra

## ⚙️ Estrutura do Projeto

```bash
src/
├── assets/
├── components/
│   ├── ProductCard.vue
│   ├── CartModal.vue
│   └── Navbar.vue
├── stores/
│   └── cartStore.js  # Gerenciamento do carrinho com Pinia
├── views/
│   ├── HomeView.vue
│   ├── ProductView.vue
│   └── CheckoutView.vue
├── App.vue
└── main.js
``````

### ✨ Diferenciais
- Tema escuro/claro (usando CSS variables).
- Animações ao adicionar itens ao carrinho (Vue Transition).
- Integração com Mercado Pago (simulada via API mock).
- Testes unitários com Vitest.
