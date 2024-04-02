function mudarTema() {
  console.log("Chamamos Mudar Tema");

  let body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("gray");
  } 
  else{
        body.classList.remove("gray");
        body.classList.add("dark");
    }
}
let nome = window.prompt("Digite seu nome");
let puts = "Meu Criador";
let nameDOM = document.getElementById("name");
let putsDOM = document.getElementById("name");
if (nome.toLowerCase() == "rodrigo") {
  putsDOM.textContent = putsDOM.textContent + " " + puts;
} 
else {
  nameDOM.textContent = nameDOM.textContent + " " + nome;
}
