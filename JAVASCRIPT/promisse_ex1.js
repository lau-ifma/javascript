
const pessoas = [
    {nome: 'joao costa', idade: 16},
    {nome: 'Maria Alenkar', idade: 23},
    {nome: 'leticia costa', idade: 14},
    {nome: 'Jose Silva', idade: 26},
    {nome: 'Raquel costa', idade: 13}
]

const buscarPessoasMenoresDe18 = new Promise((resolve, reject) => {
    console.log("iniciando...")
    setTimeout(() => {
        
        const menores = pessoas.filter((e) => (e.idade <= 18))
        menores.length > 0 
        ? resolve(menores) 
        : reject("Nenhuma pessoa menor de 18 anos encontrada.")
    }, 1000);
    
})

buscarPessoasMenoresDe18
    .then((value)=> {console.log(value)})
    .catch((error)=> {console.log(error)})
    .finally(() =>{ console.log("finalizado")})