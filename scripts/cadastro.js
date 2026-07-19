const senha = document.querySelector('#ipass');
const rsenha = document.querySelector('#irpass');
const botao = document.querySelector('#submit-button')
const erro = document.querySelector('#error');

botao.addEventListener('click', passReview);

function passReview(){
   if(!(senha.value === rsenha.value)){
    botao.disabled = true;   
    erro.innerHTML = `Senhas divergem`;
    botao.disabled = false;  
}else{
    botao.disabled = false;   
    erro.innerHTML = ``;
}
}