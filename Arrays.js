const dogs = ["paçoca", "lilica", "sapeca", "chica", "puc"];

// =================== For each ============================ //
/// ================== Don't return nothing ================ //

let femaleDogs = [];                    // Variável let 
console.log(femaleDogs);

dogs.forEach((name) => {                // Acessando as propriedades dentro od objeto array
    switch (name) {                     // Foreach varre o array, fazendo aquilo que for passado no corpo
        case "lilica":
            femaleDogs.push(name)
            break;
        case "sapeca":
            femaleDogs.push(name)
            break;
        case "chica":
            femaleDogs.push(name)
            break;
        case "puc":
            femaleDogs.push(name)
            break;
    }
})

console.log(femaleDogs);

// =========================== Map ========================== //
/// ========= Return a new array with the same length ======= //

const qtdCharsName = dogs.map( // O map varre todos os itens dentro do array e retorna um array com o mesmo tamanho
    (name) => {
        const qtdChars = name.length;
        return qtdChars;
    }
)

console.log({ qtdCharsName });

