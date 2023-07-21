//creo la lista 
//creo il modulo per definire i multipli 
//associo ad essi le parole 

//variabili numeri
let a = "FizzBuzz"
let b = "Fizz"
let c = "Buzz"

//ciclo che crea i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
        const ul = document.querySelector("ul.myList")
        const li = document.createElement("li")
        ul.append(li)
    if (i % 3 == 0 && i % 5 == 0){
        console.log(a)
        li.append(a)
    }
    else if (i % 3 == 0){
        console.log(b)
        li.append(b)
    }
    else if (i % 5 ==0){
        console.log(c)
        li.append(c)
    }
    else{
        console.log(i)
        li.append(i)
    }

}






