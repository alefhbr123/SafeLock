<div align="center">
<img src="LogoSafeLock.png" alt="Logo - SafeLock" width="200" height="200">
</div>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

O projeto SafeLock consiste em um gerenciador de senhas para que o indivíduo não perca tempo procurando senhas avulsas.

## ⚠️Problema:
Meu pai guardava as senhas dele em um caderno. Quando ele precisava buscar uma das senhas, gastava muito tempo procurando. Assim, desenvolvi o SafeLock para auxiliar meu pai nesse processo.

## 💡Solução:
Sistema para o indivíduo cadastrar as senhas. Assim, ele vai ser direcionado para uma página onde vai poder pesquisar pela senha desejada ou apagar alguma senha cadastrada. Com isso, tornando a busca mais eficiente e rápida.

## 🚀Tecnologias Utilizadas
- ``Python``
- ``Django``
- ``SQLite``
- ``HTML``
- ``CSS``
- ``JavaScript``

## 📦​Instalação
## 1. Clonar o Repositório

Abra o terminal e execute os comandos abaixo:

```bash
git clone https://github.com/alefhbr123/SafeLock.git
cd SafeLock
```
## 2. Crie e Ative um Ambiente Virtual
```bash
python -m venv venv
```
Ative o ambiente:
- No Windows:
```bash
venv\Scripts\activate
```
- No macOS/Linux:
```bash
  source venv/bin/activate
```
## 3. (Agora dentro do ambiente virtual) Instale as Dependências
instale o Django:
```bash
pip install django
```
## 4. (Ainda dentro do ambiente virtual)Acessar a pasta com manage.py
```bash
cd src/projeto_login
```
## 5. Aplique as Migrações do Banco de Dados
Crie o banco de dados e configure o schema:
```bash
python manage.py migrate
```
## 6.Execute o Servidor de Desenvolvimento
Inicie o servidor:
```bash
python manage.py runserver
```
Acesse a aplicação pelo navegador em: http://127.0.0.1:8000/


## 🔗Funcionalidades:
- ✅Autenticação e Cadastro de Usuários:
    - Permite que novos usuários se registrem e façam login para acessar a aplicação.

- ✅Menu Principal:
    - Após o login, o usuário é redirecionado para um menu que centraliza as funcionalidades da aplicação.

- ✅Cadastro de Senhas:
    - Interface para adicionar senhas, informando o tipo, e-mail e a própria senha.

- ✅Listagem de Senhas:
    - Tela que exibe todas as senhas cadastradas, organizadas em tabela, com opções para:

    - Pesquisa: Campo de busca para filtrar senhas pelo tipo.

    - Exclusão Individual: Botão para remover uma senha específica.

    - Exclusão em Massa: Opção para apagar todas as senhas de uma só vez.

- ✅Interface Moderna e Responsiva:
    - Layout inspirado no design SafeLock, com cards, botões estilizados e responsividade para diferentes dispositivos.

- ✅Armazenamento Local (LocalStorage):
    - Utiliza JavaScript para gerenciar o armazenamento temporário das senhas no navegador, facilitando a manipulação de dados sem backend complexo.


















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
 src
    └── projeto_login
        ├── app_projeto_login
        │   ├── admin.py
        │   ├── apps.py
        │   ├── forms.py
        │   ├── models.py
        │   ├── urls.py
        │   ├── views.py
        │   ├── migrations/
        │   ├── static/
        │   │   └── app_projeto_login/
        │   │       ├── style.css    # Estilos da aplicação
        │   │       └── script.js    # Funcionalidades em JavaScript
        │   └── templates/
        │       └── accounts/
        │           ├── login.html       # Tela de login
        │           ├── register.html    # Tela de registro
        │           ├── menu.html        # Tela do menu principal
        │           └── list.html        # Tela de listagem de senhas
        ├── db.sqlite3
        ├── manage.py
        └── projeto_login
            ├── settings.py
            ├── urls.py
            └── wsgi.py

```
## 🔗Funcionalidades a serem adicionados:
- Integração com um banco de dados mais robusto (por exemplo, PostgreSQL).
- Implementação de recursos avançados de segurança e criptografia para as senhas.
- Interface responsiva aprimorada para dispositivos móveis.
- Implementação de funcionalidades adicionais, como edição de senhas e filtros avançados de pesquisa.
