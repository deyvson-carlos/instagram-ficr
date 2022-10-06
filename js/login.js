function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "josecarlos@ficr.com" && senha == "123"){
        alert('Usuário logado com Sucesso!');
        location.href = "#";
    }
    else{
        alert('Usuário ou senha incorretos!');
    }
 }