let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Informe o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'Bem-vindo ao Sistema';
}else{
    elemento.textContent = nomeUsuário;
}