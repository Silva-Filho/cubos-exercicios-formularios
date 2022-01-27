/* const {
    rock,
    reggae,
    mbp,
    samba,
    rap
} = require("./data/musicas"); */
/* console.log(rock); */

const rock = [
    "Planet Hemp - Mantenha o Respeito",
    "Pedro Luís - Menina do Salão de beleza",
    "Renato Carosone - Tu Vuò Fa' L'Americano",
    "Supla - Garota de berlim",
    "Camisa de Vênus - Eu Não Matei Joana D'arc",
    "Coolio - Gangsta's Paradise",
];

const reggae = [
    "BaianaSystem - Reza Forte",
    "BaianaSystem - Lucro",
    "Bob Marley - Redemption song",
    "Bob Marley - I Shot The Sheriff",
    "Natiruts - Presente de um Beija-Flor"
];

const mbp = [
    "Elza Soares - Mulher do Fim do Mundo",
    "Lenine - Cupim de Ferro",
    "Edu Lobo e Maria Bethânia - Cirandeiro",
    "Arnaud Rodrigues - Teté Das Lendas Rurais",
    "Ednardo - Enquanto Engoma A Calça",
    "Paulinho Moska - O Útimo Dia",
    "Mestre Anderson Miguel - O Cirandeiro",
    "Rhaissa Bittar - Toda vez que eu dou um passo o mundo sai do lugar"
];

const samba = [
    "Ederaldo Gentil - O Ouro e a Madeira",
    "Nelson Sargento - Agoniza mas não morre",
    "Túlio Piva - Gente da Noite",
    "Batatinha - Conselheiro",
    "Beth Carvalho - Velho Ateu",
    "Elza Soares - A Saudade Me Mata"
];

const rap = [
    "Marcelo D2 - Sou Ronaldo",
    "Sabotage - Um Bom Lugar",
    "Racionais MC's - Negro Drama",
    "509-E - Oitavo Anjo",
    "RZA - Fury in My Eyes/Revenge",
];

const generoMusical = document.querySelector("#genero-musical");
/* console.log(generoMusical); */
const inputMusica = document.querySelector("#musica");
/* console.log(musica); */

const obterIndiceAleatorio = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const mostrarMusica = (musica) => {
    inputMusica.classList.remove("escondido");
    inputMusica.value = musica;
};

const obterMusica = (vetor) => {
    const max = vetor.length - 1;
    const min = 0;
    const indice = obterIndiceAleatorio(min, max);
    const musicaSelecionada = vetor[indice];

    mostrarMusica(musicaSelecionada);
};

const limparInput = () => {
    if (!generoMusical.value) {
        inputMusica.classList.add("escondido");
    }
};

const obterGeneroMusical = () => {
    /* event.preventDefault(); */
    /* console.log(generoMusical.value); */
    const genero = generoMusical.value;
    /* console.log(genero); */
    /* console.log(typeof genero); */

    switch (genero) {
        case "rock":
            obterMusica(rock);
            break;
        case "reggae":
            obterMusica(reggae);
            break;
        case "mpb":
            obterMusica(mbp);
            break;
        case "samba":
            obterMusica(samba);
            break;
        case "rap":
            obterMusica(rap);
            break;
        default:
            limparInput();
            break;
    }
};

generoMusical.addEventListener("change", obterGeneroMusical);

/*  */

/* "module": "commonjs", */
/* "type": "module" */