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
  
      let senhas = JSON.parse(localStorage.getItem("senhas")) || [];
      senhas.push(senhaData);
      localStorage.setItem("senhas", JSON.stringify(senhas));
  
      alert("Senha adicionada com sucesso!");
  
      document.getElementById("tipo").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    });
  }
  
  function renderTable() {
    const tableBody = document.querySelector("#data-table tbody");
    if (!tableBody) return; 
  
    tableBody.innerHTML = "";
  
    let senhas = JSON.parse(localStorage.getItem("senhas")) || [];
  
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
  
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Apagar";
  
      deleteButton.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja apagar esta senha?")) {
          senhas.splice(index, 1);
          localStorage.setItem("senhas", JSON.stringify(senhas));
          renderTable();
        }
      });
  
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  }

  window.addEventListener("load", function () {
    if (document.getElementById("data-table")) {
      renderTable();
    }
  });
  

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
  
  if (document.getElementById("delete-all-button")) {
    document.getElementById("delete-all-button").addEventListener("click", function () {
      if (confirm("Tem certeza que deseja apagar todas as senhas?")) {
        localStorage.removeItem("senhas");
        renderTable();
      }
    });
  }
  