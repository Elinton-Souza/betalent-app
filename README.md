# BeTalent - Teste Técnico Front-End

Aplicação web desenvolvida como teste técnico para a BeTalent, que exibe uma tabela de funcionários com dados consumidos de uma API simulada.

## 🖥️ Tecnologias utilizadas

- React.js
- CSS puro
- json-server (API simulada)

## ✅ Funcionalidades

- Listagem de funcionários em tabela
- Busca/fil# BeTalent - Teste Técnico Front-End

Aplicação web desenvolvida como teste técnico para a BeTalent, que exibe uma tabela de funcionários com dados consumidos de uma API simulada.

## 🖥️ Tecnologias utilizadas

- React.js
- CSS puro
- json-server (API simulada)

## ✅ Funcionalidades

- Listagem de funcionários em tabela
- Busca/filtro por nome, cargo e telefone
- Formatação de datas (DD/MM/AAAA)
- Formatação de telefones (+XX (XX) XXXXX-XXXX)
- Layout responsivo
- Accordion no mobile para exibir detalhes do funcionário
### 💡 Detalhes sobre o Accordion (Mobile)
Para garantir que a experiência do usuário seja fluida em dispositivos móveis, implementei um sistema de **Accordion** que:
- **Prioriza Dados**: Exibe apenas Foto e Nome inicialmente.
- **Expansão sob Demanda**: Revela Cargo, Data de Admissão e Telefone apenas quando solicitado, evitando o scroll horizontal excessivo.
- **Estado Dinâmico**: Gerenciado via React Hooks, garantindo que a interface reaja instantaneamente ao clique do usuário.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [json-server](https://github.com/typicode/json-server)

## 🚀 Como rodar o projeto

### 1. Clone o repositório da API simulada

```bash
git clone https://github.com/BeMobile/desafio-front-end.git
cd desafio-front-end
npx json-server db.json
```

Deixe este terminal rodando. A API estará disponível em `http://localhost:3000`.

### 2. Clone este repositório

```bash
git clone https://github.com/Elinton-Souza/betalent-app.git
cd betalent-app
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3001`.

## 📱 Layout

O projeto segue o layout fornecido no [Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.) com versões desktop e mobile.tro por nome, cargo e telefone
- Formatação de datas (DD/MM/AAAA)
- Formatação de telefones (+XX (XX) XXXXX-XXXX)
- Layout responsivo
- Accordion no mobile para exibir detalhes do funcionário
### 💡 Detalhes sobre o Accordion (Mobile)
Para garantir que a experiência do usuário seja fluida em dispositivos móveis, implementei um sistema de **Accordion** que:
- **Prioriza Dados**: Exibe apenas Foto e Nome inicialmente.
- **Expansão sob Demanda**: Revela Cargo, Data de Admissão e Telefone apenas quando solicitado, evitando o scroll horizontal excessivo.
- **Estado Dinâmico**: Gerenciado via React Hooks, garantindo que a interface reaja instantaneamente ao clique do usuário.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [json-server](https://github.com/typicode/json-server)

## 🚀 Como rodar o projeto

### 1. Clone o repositório da API simulada

```bash
git clone https://github.com/BeMobile/desafio-front-end.git
cd desafio-front-end
npx json-server db.json
```

Deixe este terminal rodando. A API estará disponível em `http://localhost:3000`.

### 2. Clone este repositório

```bash
git clone https://github.com/Elinton-Souza/betalent-app.git
cd betalent-app
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3001`.

## 📱 Layout

O projeto segue o layout fornecido no [Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.) com versões desktop e mobile.