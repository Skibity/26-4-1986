function verificarSenha(){

  var senha = document.getElementById('senha').value;
  var container = document.querySelector('.container');
  var video = document.querySelector('.video');


  if (senha === "123")
  {
    container.style.display="none";
    video.style.display="flex";
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