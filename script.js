
/* Item = Carro
Nome = nome
velMax = velocidade máxima, 
marca = marca
preco = preço
temCvt = possui cambio CVT
fonte: https:carrosnaweb.com.br 
const nome | const preço | const marca | const velMax

Para os dados, foram considerados a última versão fabricada do carro*/

const carro1 = {
    nome: "Duster",
    preco: 133.990,
    marca: "Renault",
    velMax: "190km/h",
    temCvt: true,
    imgCar: "",
}
const carro2 = {
    nome: "Tracker",
    preco: 152.790,
    marca: "Chevrolet",
    velMax: "185km/h",
    temCvt: false,
    imgCar: "",
}
const carro3 = {
    nome: "Creta",
    preco: 165.290,
    marca: "Hyundai",
    velMax: "190km/h",
    temCvt: false,
    imgCar: "",
}
const carro4 = {
    nome: "Corolla Cross",
    preco: 190.590,
    marca: "Toyota",
    velMax: "195km/h",
    temCvt: true,
    imgCar: "",
}
const carro5 ={
    nome: "Honda HRV",
    preco: 184.500,
    marca: "Honda",
    velMax: "198km/h",
    temCvt: true,
    imgCar: "",
}


// const mediaPreco = (carro1.preco+carro2.preco+carro3.preco+carro4.preco)/4; 
// console.log(mediaPreco);

// const verificaCvt = carro1.temCvt && carro2.temCvt && carro3.temCvt && carro4.temCvt;
// console.log(verificaCvt); 

// //semana 2

// console.log(carro1.nome.toUpperCase(),"\n",carro1.preco,"\n"
// , carro1.marca,"\n", carro1.velMax,"\n", carro1.temCvt);
// console.log(carro2.nome.toUpperCase(),"\n",carro2.preco,
// "\n", carro2.marca,"\n", carro2.velMax,"\n", carro2.temCvt);
// console.log(carro3.nome.toUpperCase(),"\n",carro3.preco,
// "\n", carro3.marca,"\n", carro3.velMax,"\n", carro3.temCvt);
// console.log(carro4.nome.toUpperCase(),"\n",carro4.preco,
// "\n", carro4.marca,"\n", carro4.velMax,"\n", carro4.temCvt);

// // Verificar o resultado exposto na semana 3 do projeto, pois ficou diferente 
// // dos modelos apresentados no assíncrono.

// //semana 3
const arrayCarros = [];
arrayCarros.push(carro1)
arrayCarros.push(carro2);
arrayCarros.push(carro3);
arrayCarros.push(carro4);
arrayCarros.push(carro5);
console.log(arrayCarros);

// //semana 4

// if (carro1.temCvt){
//     alert(carro1.nome + " possui câmbio CVT;")
// }else{
//     alert(carro1.nome + " não possui câmbio CVT;")
// }
// if (carro2.temCvt){
//     alert(carro2.nome + " possui câmbio CVT;")
// }else{
//     alert(carro2.nome +  " não possui câmbio CVT;")
// }
// if (carro3.temCvt){
//     alert(carro3.nome + " possui câmbio CVT;")
// }else{
//     alert(carro3.nome +  " não possui câmbio CVT;")
// }
// if (carro4.temCvt){
//     alert(carro4.nome + " possui câmbio CVT;")
// }else{
//     alert(carro4.nome +  " não possui câmbio CVT;")
// }
// if (carro5.temCvt){
//     alert(carro5.nome + " possui câmbio CVT;")
// }else{
//     alert(carro5.nome +  " não possui câmbio CVT;")
// }


// semana 5 
// const carro = [{
//     nome : "Duster",
//     preco : 133.990,
//     marca : "Renault",
//     velMax : "190km/h",
//     temCvt : true,
// },
//  {
//     nome : "Tracker",
//     preco : 152.790,
//     marca : "Chevrolet",
//     velMax : "185km/h",
//     temCvt : false,
// },
// {
//     nome : "Creta",
//     preco : 165.290,
//     marca : "Hyundai",
//     velMax : "190km/h",
//     temCvt : false,
// },
// {
//     nome : "Corolla Cross",
//     preco : 190.590,
//     marca : "Toyota",
//     velMax : "195km/h", 
//     temCvt : true,
// }
// ]


// for(const carros of arrayCarros){
//  console.log(`O carro ${carros.nome.toUpperCase()}, de marca ${carros.marca}, tem como velocidade máxima ${carros.velMax}, vale ${carros.preco + " mil"} e possui CVT?${carros.temCvt}`);
// }

// for(let i = 0; i < arrayCarros.length; i++){
//     console.log(`O carro ${arrayCarros[i].nome.toUpperCase()} tem como velocidade máxima ${arrayCarros[i].velMax}`);
//   }

// semana 6

function imprimirObj(carro) {
    let veiculo = `O carro ${carro.nome.toUpperCase()}, de marca ${carro.marca}, tem como velocidade máxima ${carro.velMax}, vale ${carro.preco + " mil"} e     
    possui CVT? ${carro.temCvt}`
    return veiculo
}

function carObj(carros) {
    for (const carro of carros) {
        console.log(imprimirObj(carro));
        // console.log("=".repeat(30))
    }
}

// carObj(arrayCarros)

function buscaCar(pesquisa, carros) {
    let carroFiltrado = carros.filter(carro => {
        return carro.nome.toUpperCase().includes(pesquisa.toUpperCase())
    })
    if (carroFiltrado.length === 0) {
        alert("Item não encontrado")
    } else {
        return carroFiltrado
    }
}

// let ps = prompt("Digite o carro que você quer comprar 2022:")
// let carroFilter = buscaCar(ps, arrayCarros)
// carObj(carroFilter)
