//fizz Buzz

const output = () => {
    const fizzBuzz = (num) =>{
        if(num % 3 === 0 && num % 5 === 0){
            return "FizzBuzz"
        }else if(num % 3 === 0){
            return "Fizz"
        }else if(num % 5 === 0){
            return "Buzz"
        }else{
            return num
        }
    }

    for(let i = 1; i <= 30; i++){
        console.log(fizzBuzz(i))
    }
}