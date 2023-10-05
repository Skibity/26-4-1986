function verificarSenha(){

  var senha = document.getElementById('senha').value;
  var container = document.querySelector('.container');
  var video = document.querySelector('.video');


  if (senha.trim() === "Mykhailo")
  {
    window.location.href = "/hahfuiakfhwjfhdscbasccjvkayfdajkgFUHWIW8EFJWIOFHYIWGUIVBWGWISDUKBCKBHBHJbhjbuldgagiua.html"; // Redirect to the information subpage
    return;
  }
   else if (senha.trim() === "") 
   {
    alert('Digite uma senha');
  } 
  else 
  {
    alert('Senha "' + senha + '" está errada, tente novamente')
  }
}
