export class Carro{    // Com a classe eu crio todas as caracteristicas e comandos
                      //do codigo, e o export exporta esses comandos para a principal
    gas: number;
    gasMax :number; //10
    pass:number;
    passMax:number; //2
    km:number;

    constructor(){   // incializar, todas as informações que se tem do codigo , ações que o obj tem que fazer
        this.gas = 0;
        this.pass = 0;
        this.km = 0;
        this.gasMax = 10;
        this.passMax = 2;
    }
    status(): string {  // criar uma função e retorna um tipo string , e vai mandar essa informação pra principal 
        let s: string ="";
        s += "Seu status é: " +  "passageiros: " +  this.pass + ", gasolina: " +  this.gas  + ", KM: " + this.km + "\n" ; 
        return s; 
    }

    entrar(): void {
        if (this.pass>=this.passMax){
            console.log("Lotado");
        }

        else {
            this.pass+=1;
        }          
    }
    sair(): void {
        if(this.pass<=0){
            console.log("Carro vazio");
        }
        else{
            this.pass-=1;
        }
    }
    abastecer(combustivel: number): void{ //parametro recebe informação da main
        this.gas+=combustivel;
        if (this.gas>=this.gasMax){
            this.gas=this.gasMax;
        }    
    }
    andar(quilometros: number): void{   //quilometro= quero andar
        if (this.pass >= 1 && this.gas >= quilometros/10){
            this.km+=quilometros;
            this.gas-=(quilometros/10) // minha gasolina (resto)= gasolina - quilometro que eu quero/10 
        }
        else{
            console.log("vá abastecer.")
        }
    }

}