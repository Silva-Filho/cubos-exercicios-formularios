const senha = document.querySelector("#senha");
/* console.log(senha); */
const senhaParaConfirmar = document.querySelector("#confirmar-senha");
/* console.log(senhaParaConfirmar); */
const messagemSenha = document.querySelector(".form-info span");
/* console.log(messagemSenha); */
const celular = document.querySelector("#celular");
console.log(celular);
/* Usar RegEx. */
// Verifica se a string contém apenas números:
const er = /^[0-9]*$/gm;

const confirmarSenha = () => {
    /* if (senha.value && senhaParaConfirmar.value && ) {} */
    if (senha.value !== senhaParaConfirmar.value) {
        messagemSenha.classList.remove("escondido");
        messagemSenha.innerHTML = "A senha a confirmar diferente do campo senha.";
    }
};

senhaParaConfirmar.addEventListener("change", confirmarSenha);
