const button= document.getElementById("aumentarCont");

button.addEventListener("click", () => {
    const contador = document.getElementById("contador");

    let val = Number.parseInt(contador.innerHTML);

    contador.innerHTML = val + 1;
});
