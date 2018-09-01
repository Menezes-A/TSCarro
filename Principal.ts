import {Carro} from "./Carro"; //importo Carro 
declare function require (name:string) : any;
var readline = require('readline-sync');

let car: Carro = new Carro();  //new cria um obj na memoria, o obj Carro.  
let comandos: string = "";
while (true){ //laço infinito 
    console.log("Você quer consutar: status, entrar, sair, abastecer ou andar? \n"); //pergutando ao usuario
    comandos=readline.question("");// serve para digitar 
    switch(comandos){ //opções
        case "status":
            console.log(car.status()); //mostrar o status que está em Carro.ts
            break;
        case "entrar":
            car.entrar(); 
            break;    
        case "sair":
            car.sair(); //metododo 
            break;
        case "abastecer":
           let combustivel:number= parseFloat (readline.question("Digite quanto quer abastecer:"));
           car.abastecer(combustivel);
           break;
        case "andar":
            let quilometros:number=parseFloat(readline.question("Digite os quilometros que deseja percorrer:"));
            car.andar(quilometros);
            break;
        default:// se nenhuma case for executada certo 
            console.log("ERRO");
    }
}