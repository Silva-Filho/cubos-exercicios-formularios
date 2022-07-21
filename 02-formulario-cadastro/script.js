const senha = document.querySelector("#senha");
const senhaParaConfirmar = document.querySelector("#confirmar-senha");
const messagemSenha = document.querySelector(".form-info .password");
const celular = document.querySelector("#celular");
const messagemCelular = document.querySelector(".form-info .mobile");

const validarCelular = () => {
    const er = /\([0-9]{2}\) [9]{1} [0-9]{4}-[0-9]{4}/;
    const ehCelularValido = er.test(celular?.value);

    if (!ehCelularValido) {
        messagemCelular?.classList.remove("escondido");
        messagemCelular.innerHTML = "O formato correto é: (xx) 9 xxxx-xxxx";
    } else {
        messagemCelular?.classList.add("escondido");
        messagemCelular.innerHTML = "";
    }
};

celular?.addEventListener("change", validarCelular);

const confirmarSenha = () => {
    if (senha.value !== senhaParaConfirmar.value) {
        messagemSenha.classList.remove("escondido");
        messagemSenha.innerHTML = "A senha a confirmar diferente do campo senha.";
    } else {
        messagemSenha.classList.add("escondido");
        messagemSenha.innerHTML = "";
    }
};

senhaParaConfirmar?.addEventListener("change", confirmarSenha);
