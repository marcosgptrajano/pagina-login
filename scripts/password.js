const hide = document.querySelector('#hide');
const pass = document.querySelector('#ipass');
hide.addEventListener('click', showPass);

let showIsActive = false;


function showPass(){
    if(!showIsActive){
        hide.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        pass.setAttribute('type', 'text');
        showIsActive = true;
    } else{
        hide.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        pass.setAttribute('type', 'password');
        showIsActive = false;
    }
}

