//creo la lista 
//creo il modulo per definire i multipli 
//associo ad essi le parole 

let a = "FizzBuzz"
let b = "Fizz"
let c = "Buzz"
//ciclo che crea i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(a)
    }
    else if (i % 3 == 0){
    console.log(b)
    }
    else if (i % 5 ==0){
        console.log(c)
    }
    else{
        console.log(i)
    }
}



