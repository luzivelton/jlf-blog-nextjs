
Este é o repositório do frontend para o blog **JLF Blog**.

O projeto consiste em uma aplicação que exibe uma listagem de postagens, permite a busca e filtragem, e apresenta uma página de detalhes para cada post, por meio de uma experiência de leitura rápida, responsiva e agradável.

**🚀 [Veja a aplicação em produção](https://www.google.com/search?q=URL_DO_DEPLOY_AQUI)**

## ✨ Features
  - **Listagem Dinâmica:** Posts carregados diretamente da API.
  - **Filtros e Busca:** Funcionalidade de pesquisa por palavra-chave e filtro por categorias.
  - **Paginação:** Listagem limitada a 6 postagens por página.
  - **Página de Detalhes:** Rota dinâmica para exibir informações completas de cada post.
  - **Posts Relacionados:** Sugestão de posts com base em categorias ou tags semelhantes.
  - **Responsividade:** Layout 100% responsivo para desktop, tablet e mobile.
  - **SEO e Acessibilidade:** Implementação de boas práticas para melhor indexação e usabilidade.
  <!-- - **Dark Mode:** Tema claro e escuro para uma melhor experiência de leitura. -->

## 🛠️ Tecnologias Utilizadas
  - **Next.js 15 (App Router)**
  - **TypeScript**
  - **Tailwind CSS 4**

## 🚀 Ambiente de Desenvolvimento
Siga os passos abaixo para executar o projeto em seu ambiente local.

**1. Clone o repositório:**

```bash
git clone https://github.com/luzivelton/jlf-blog-nextjs.git
cd jlf-blog-nextjs
```

**2. Instale as dependências:**

Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

**3. Inicie o servidor de desenvolvimento:**

Com npm:

```bash
npm run dev
```

Ou com yarn:

```bash
yarn dev
```

A aplicação estará disponível em **http://localhost:3000**.

## 📝 Variáveis de Ambiente

O projeto utiliza uma API pública para os dados. Para maior flexibilidade, a URL da API pode ser configurada através de um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=https://nextjs-alura-teste.vercel.app/
```

## 🔗 API

O frontend consome uma API para buscar e exibir as postagens. A API fornece todos os dados necessários, incluindo títulos, categorias e conteúdo.

  - **API Base URL:** `https://nextjs-alura-teste.vercel.app/`
  - **Documentação:** A documentação completa pode ser encontrada na própria URL da API.

-----

Desenvolvido por **João Luiz Fernandes**.