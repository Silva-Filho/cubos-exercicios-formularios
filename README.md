# Formulários

## Exercícios
***1. Formulário de Login***

Seu objetivo é criar um formulário de login com os seguintes campos:
- Email
- Senha

Comportamentos esperados:
- Todos os campos são obrigatórios
- O Email deve ser um email válido
- A senha não poderá ser vista enquanto escrita
---

***2. Formulário de Cadastro***

Seu objetivo é criar um formulário de cadastro com os seguintes campos:
- Nome
- Email
- Celular
- Senha
- Estado

Comportamentos esperados:
- Todos os campos são obrigatórios
- O Email deve ser um email válido
- O celular deve conter somente números
- A senha não poderá ser vista enquanto escrita
- A senha deverá ser confirmada para a submissão do formulário ocorrer (por meio de outro `<input>`)
- O estado deve ser escolhido a partir de uma lista com todos os estados do Brasil (elemento `<select>`)
---

***3. Recomendação de música***

Seu objetivo é criar um formulário de cadastro com os seguintes campos:
- Genêro músical (elemento `<select>` com pelo menos 3 `<option>`s)
- Música (elemento `<input type="text">` com `display: none`)

Comportamentos esperados:
- O campo "genêro músical" é obrigatório
- O campo "música" deverá ser preenchido a partir do campo "genêro músical" escolhido pelo usuário
  - Você pode colocar 1 música fixa por genêro ou criar uma lista de músicas e escolher uma aleatória por genêro
- O formulário deverá ser submetido a seguinte URL "https://www.google.com/search" utilizando o método HTTP GET e enviando como valor do parametro de query "q" o valor que estiver no campo "música".

---

###### tags: `módulo 2` `front-end` `HTML` `DOM`
