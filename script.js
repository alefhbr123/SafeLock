if (document.getElementById("add-button")) {
    document.getElementById("add-button").addEventListener("click", function () {
      const tipo = document.getElementById("tipo").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!tipo || !email || !password) {
        alert("Todos os campos devem ser preenchidos!");
        return;
      }
  
      const senhaData = { tipo, email, password };
  
      // Recupera as senhas do localStorage (ou usa um array vazio)
      let senhas = JSON.parse(localStorage.getItem("senhas")) || [];
      senhas.push(senhaData);
      localStorage.setItem("senhas", JSON.stringify(senhas));
  
      alert("Senha adicionada com sucesso!");
  
      document.getElementById("tipo").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    });
  }
  
  // Função que renderiza a tabela com as senhas salvas
  function renderTable() {
    const tableBody = document.querySelector("#data-table tbody");
    if (!tableBody) return; // Se não houver tabela, sai da função
  
    // Limpa o conteúdo atual para evitar duplicatas
    tableBody.innerHTML = "";
  
    let senhas = JSON.parse(localStorage.getItem("senhas")) || [];
  
    // Para cada senha, cria uma linha na tabela
    senhas.forEach((senha, index) => {
      const row = document.createElement("tr");
  
      const tipoCell = document.createElement("td");
      tipoCell.textContent = senha.tipo;
      row.appendChild(tipoCell);
  
      const emailCell = document.createElement("td");
      emailCell.textContent = senha.email;
      row.appendChild(emailCell);
  
      const passwordCell = document.createElement("td");
      passwordCell.textContent = senha.password;
      row.appendChild(passwordCell);
  
      // Cria a célula de ações, com botão para apagar essa senha
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Apagar";
  
      deleteButton.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja apagar esta senha?")) {
          // Remove o item do array usando o índice
          senhas.splice(index, 1);
          // Atualiza o localStorage com o array atualizado
          localStorage.setItem("senhas", JSON.stringify(senhas));
          // Re-renderiza a tabela para refletir a mudança
          renderTable();
        }
      });
  
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);
  
      // Adiciona a linha ao corpo da tabela
      tableBody.appendChild(row);
    });
  }
  
  // Ao carregar a página, se estivermos na list.html, renderiza a tabela
  window.addEventListener("load", function () {
    if (document.getElementById("data-table")) {
      renderTable();
    }
  });
  
  // Função para filtrar as senhas pelo tipo
  if (document.getElementById("search-button")) {
    document.getElementById("search-button").addEventListener("click", function () {
      const searchValue = document.getElementById("search").value.toLowerCase();
      const tableBody = document.querySelector("#data-table tbody");
      const rows = tableBody.getElementsByTagName("tr");
  
      for (let i = 0; i < rows.length; i++) {
        const tipoText = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
        if (tipoText.indexOf(searchValue) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    });
  }
  
  // Função para apagar todas as senhas
  if (document.getElementById("delete-all-button")) {
    document.getElementById("delete-all-button").addEventListener("click", function () {
      if (confirm("Tem certeza que deseja apagar todas as senhas?")) {
        localStorage.removeItem("senhas");
        renderTable();
      }
    });
  }
  