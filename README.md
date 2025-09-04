# 🎬 Aplicativo de Busca de Filmes - Módulo 3 (+Prati)

## 📌 Visão Geral

Esta aplicação foi desenvolvida como parte do **Módulo 3** do curso **Full Stack** do programa **+Prati**.
O objetivo é criar uma aplicação em **React** que consome a API do **TMDB** (ou **OMDb**) para permitir que usuários busquem filmes e visualizem seus detalhes.

---

## 🚀 Funcionalidades Implementadas

### 🔍 Página de Busca

* Campo de texto para o usuário digitar o termo de busca.
* Lista de resultados com:

  * Pôster
  * Título
  * Ano de lançamento
  * Botão para ver detalhes.

### 📄 Paginação

* Possibilidade de navegar entre as páginas de resultados.

### 🎥 Página de Detalhes

* Exibição de informações completas sobre o filme selecionado:

  * Diretor
  * Elenco
  * Sinopse
  * Avaliação

---

## 🛠️ Tecnologias Utilizadas

* **React** (Vite)
* **JavaScript (ES6+)**
* **CSS**
* **API TMDB** ou **OMDb**

---

## 📂 Estrutura do Projeto

```
src/
│── assets/          
│── components/       # Componentes reutilizáveis
│   ├── barra-de-pesquisa.jsx
│   ├── carregando.jsx
│   ├── filme.jsx
│   └── modal.jsx
│── styles/           # Estilos separados por componente
│   ├── barra-de-pesquisa.css
│   ├── carregando.css
│   ├── filme.css
│   ├── modal.css
│   ├── App.css
│   └── index.css
│── App.jsx           # Componente principal
│── main.jsx          # Ponto de entrada da aplicação
```

---

## ⚡ Como Executar o Projeto

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Configurar a chave da API**

   * Crie um arquivo `.env` na raiz do projeto.
   * Adicione sua chave da API:

     ```
     VITE_API_KEY=sua_chave_aqui
     ```

4. **Iniciar o servidor**

   ```bash
   npm run dev
   ```

5. **Acessar no navegador**

   ```
   http://localhost:5173
   ```

---

## 📚 Melhorias e Implementações Futuras

* **Lista de Favoritos**

  * Criar botão para adicionar/remover filmes da lista de favoritos.
  * Persistir a lista no **localStorage** para manter os dados entre sessões.

* **Tratamento de Erros**

  * Exibir mensagens personalizadas em caso de falha na requisição ou ausência de resultados.
