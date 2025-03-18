<div align="center">
<img src="Logo-SafeLock.png" alt="Logo - SafeLock" width="200" height="200">
</div>
<h1 align="center"> SafeLock </h1>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

O projeto SafeLock consiste em um gerenciador de senhas para que o indivíduo não perca tempo procurando senhas avulsas.

## 📌Link: 
https://alefhbr123.github.io/SafeLock/

## ⚠️Problema:
Meu pai guardava as senhas dele em um caderno. Quando ele precisava buscar uma das senhas, gastava muito tempo procurando. Assim, desenvolvi o SafeLock para auxiliar meu pai nesse processo.

## 💡Solução:
Sistema para o indivíduo cadastrar as senhas. Assim, ele vai ser direcionado para uma página onde vai poder pesquisar pela senha desejada ou apagar alguma senha cadastrada. Com isso, tornando a busca mais eficiente e rápida.

## ✔️Tecnologias utilizadas:
- ``HTML``
- ``CSS``
- ``JavaScript``
## 🔗Funcionalidades:
- ✅Cadastro de Senhas:

    - Permite inserir um novo registro com tipo, email e senha.
    - Armazena as informações no localStorage do navegador, dispensando a necessidade de banco de dados externo.

- ✅Listagem de Senhas:

    - Exibe todas as senhas cadastradas em uma tabela organizada.
    - Cada linha mostra o tipo, email e a senha, além de opções de ação.
- ✅Busca por Tipo:

    - Possui um campo de pesquisa que filtra as senhas pelo campo “tipo”.
    - Facilita encontrar senhas específicas em listas grandes.
- ✅Exclusão Individual:

    - Cada senha listada tem um botão “Apagar” que remove somente aquele registro do localStorage.
    - Solicita confirmação do usuário antes de concluir a ação.
- ✅Exclusão de Todas as Senhas:

    - Um botão “Apagar Todas” que remove todos os registros do localStorage de uma vez.
    - Útil para limpar completamente a lista de senhas salvas.
- ✅Navegação Simples:

    - Botões para alternar entre a página de cadastro (index.html) e a página de listagem (list.html).
    - Layout responsivo simples, que se adapta a diferentes tamanhos de tela.
- ✅Interface Intuitiva:

    - Formulário de cadastro e tabela de listagem estilizados com CSS, facilitando a visualização e a usabilidade.
    - Uso de um “cartão” (container) centralizado para organizar melhor as informações.


## 🏗Estrutura do projeto
```text
├── index.html       // Página de cadastro de senhas
├── list.html        // Página para listar, filtrar e excluir senhas
├── script.js        // Lógica de armazenamento, renderização e remoção (localStorage)
├── style.css        // Estilos CSS para as páginas
└── README.md        // Documentação do projeto
```
## 🔗Funcionalidades a serem adicionados:
- Adicionar banco de dados.
- Adicionar mais um tela para filtrar o tipo de senha a ser adicionado.
