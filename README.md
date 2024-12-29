# Fluxo Controle

Este projeto é uma aplicação web em desenvolvimento que tem como objetivo organizar dados financeiros e operacionais, proporcionando funcionalidades como gerenciamento de orçamentos, controle de estoque e visualização de fluxo de pagamentos.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
fluxo-controle/
├── .git/                     # Controle de versão
├── .next/                    # Arquivos gerados pelo Next.js
├── node_modules/             # Dependências do projeto
├── public/                   # Arquivos públicos como imagens e ícones
├── src/                      # Código-fonte da aplicação
│   ├── app/                  # Layout principal e estilos globais
│   ├── components/           # Componentes reutilizáveis
│   ├── connection/           # (Se aplicável) Conexão com o banco de dados ou APIs
│   ├── context/              # Contextos React para estados globais
│   ├── data/                 # Dados de teste ou mock
│   └── utils/                # Funções utilitárias
├── .gitignore                # Arquivos e pastas a serem ignorados pelo Git
├── eslint.config             # Configurações do ESLint
├── next.config               # Configurações do Next.js
├── next-env.d                # Tipagens para Next.js
├── package.json              # Dependências do projeto
└── tsconfig.json             # Configurações do TypeScript
```

### Descrição dos Diretórios

- **app/**: Contém o layout principal da aplicação, incluindo estilos globais.
- **components/**: Diretório para todos os componentes reutilizáveis da aplicação, organizados em subpastas conforme sua funcionalidade (por exemplo, `header`, `footer`, `main`, etc.).
- **connection/**: (Se aplicável) Contém arquivos relacionados à conexão com o banco de dados ou APIs.
- **context/**: Armazena contextos React que proporcionam estados globais para a aplicação.
- **data/**: Contém dados de teste ou mock que são usados durante o desenvolvimento.
- **utils/**: Funções utilitárias e helpers que são utilizadas em toda a aplicação.

## Principais Componentes

Abaixo, uma breve descrição dos principais componentes da aplicação:

- **Header**: Componente que contém a barra de navegação superior e elementos de marca.
- **Main**: Contém a lógica principal da aplicação, incluindo visualizações e interações com orçamentos e pagamentos.
- **Footer**: Exibe informações de copyright e outros links relevantes.
- **Orcamentos**: Gerencia a exibição e manipulação de dados de orçamentos, incluindo a capacidade de buscar e mostrar mais itens.
- **GraficoGastos**: Exibe um gráfico de gastos com base nos dados fornecidos, permitindo visualizar a distribuição dos gastos em relação ao valor estipulado.
- **GraficoTempo**: Visualiza o tempo de execução do orçamento e o tempo restante para o término do projeto.
- **CustomButton**: Componente reutilizável para botões com ícones e tooltip.

## Como Configurar e Rodar o Projeto

Para configurar e rodar o projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/fluxo-controle.git
   cd fluxo-controle
   ```

2. **Instale as Dependências**:
   Certifique-se de ter o **Node.js** e o **npm** ou **yarn** instalados. Depois, execute o seguinte comando:
   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Inicie o Servidor de Desenvolvimento**:
   Execute o comando abaixo para iniciar a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

4. **Acesse a Aplicação**:
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Tecnologias Utilizadas

- **Next.js**: Para a construção da aplicação React.
- **TypeScript**: Para tipagem estática e melhoria da qualidade do código.
- **FontAwesome**: Para ícones dentro da aplicação.
- **CSS Modules**: Para escopo e modularidade no estilo dos componentes.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um **issue** ou **pull request**.

## Notas Finais

Este projeto está em fase de desenvolvimento. As funcionalidades e a estrutura podem mudar conforme novas necessidades e melhorias forem identificadas.