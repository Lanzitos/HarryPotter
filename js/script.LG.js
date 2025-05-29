document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const rememberMeCheckbox = document.querySelector('.remember-me');
    const emailInput = document.getElementById('Email');
    const passwordInput = document.getElementById('Senha');
    const storageKey =localStorage.setItem("rememberMeData");
  
    
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
      const userData = JSON.parse(storedData);
      emailInput.value = userData.email;
      passwordInput.value = userData.password; 
      rememberMeCheckbox.checked = true;
    }
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (rememberMeCheckbox.checked) {
        const userData = {
          email: email,
          password: password 
        };
        localStorage.setItem(storageKey, JSON.stringify(userData));
      } else {
        localStorage.removeItem(storageKey);
      }
  
      const user = localStorage.getItem(email);
  
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.Senha === password) {
          localStorage.setItem("user", JSON.stringify(parsedUser));
          window.location.href = "index.html";
        } else {
          alert("Senha Incorreta");
        }
      } else {
        alert("Usuário Não Cadastrado");
      }
    });
  
    // 5. Opcional: Lógica para desmarcar "Lembrar-me" e limpar os dados
    rememberMeCheckbox.addEventListener('change', function() {
      if (!this.checked) {
        localStorage.removeItem(storageKey);
      }
    });
  });
  