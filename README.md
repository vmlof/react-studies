# ⚛️ React Studies

Repositório destinado a estudos práticos de React, focando na evolução de conceitos fundamentais (Props, State) até tópicos avançados (Hooks, Reducers, TypeScript).

## 🛠 Tech Stack

- **Core:** React 18+ (Hooks)
- **Build:** Vite
- **Linguagens:** JavaScript (ES6+), TypeScript
- **Estilo:** CSS Modules, Standard CSS

## 📂 Projetos e Conceitos

Lista de projetos desenvolvidos para fixação de conceitos específicos:

### 1. React Quiz (`/react-quiz`)

Quiz interativo com controle de tempo e pontuação.

- **Conceitos:** TypeScript (Interfaces/Types), `useReducer` para gerenciamento de estados complexos (loading, error, ready, active, finished), `useEffect` para data fetching.

### 2. usePopcorn (`/usepopcorn`)

Aplicação de busca e classificação de filmes (API OMDb).

- **Conceitos:** Criação de **Custom Hooks** (`useMovies`, `useLocalStorageState`, `useKey`), manipulação de APIs com `fetch` e `AbortController` (limpeza de requests), persistência em LocalStorage.

### 3. Eat-n-Split (`/eat-n-split`)

Calculadora para divisão de contas entre amigos.

- **Conceitos:** Formulários controlados, "Lifting State Up" (elevação de estado entre componentes irmãos), lógica condicional de renderização.

### 4. Travel List (`/travel-list`)

Checklist de itens para viagem com estatísticas.

- **Conceitos:** Manipulação imutável de arrays (CRUD), Derived State (cálculo automático de % com base no estado existente), passagem de props via children.

### 5. Projetos Introdutórios

- **Pizza Menu:** Estrutura de componentes, props e renderização de listas.
- **Steps:** Gerenciamento básico de estado com `useState`.

---

## 🚀 Como rodar

Projetos inicializados com **Vite**.

1.  Clone o repo:
    ```bash
    git clone https://github.com/vmlof/react-studies.git
    ```
2.  Acesse a pasta do projeto (ex: `react-quiz`):
    ```bash
    cd react-quiz
    ```
3.  Instale e rode:
    ```bash
    npm install
    npm run dev
    ```

## 📌 Status

Em desenvolvimento. Próximos passos envolvem a integração destas interfaces com APIs em **ASP.NET Core MVC** para consolidação de arquitetura Fullstack.
