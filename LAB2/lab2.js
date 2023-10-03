// Ex 1:

const gretter = (myArray, counter) => {
    var greetText = 'Hello';

    myArray.forEach(userName => {
        console.log(`${greetText}` + " " + `${userName}`)
    })
    
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)


// Ex 2:

function capitalize(input){
    [firstLetter, ...restLetter] = input;
    return (`${firstLetter.toUpperCase()}` + `${restLetter.join('')}`)
}
console.log(capitalize('fooBar'))

// Ex 3:

function capitalizeColors(){
    const colors = ['red', 'green', 'blue']
    const each = colors.map((x) => capitalize(x));
    return each
 
}

console.log(capitalizeColors())

// Ex 4:

function filterLessThan20(){
    var values = [1,60,34,30,20,5]
    const filtered = values.filter((x) => x < 20)
    return filtered
}

console.log(filterLessThan20())

// Ex 5:

function calculateSum(){
    var array = [1,2,3,4]
    const init = 0
    const arraySum = array.reduce((accumulate, currentValue) => accumulate + currentValue, init)
    return arraySum
}

function calculateProduct(){
    var array = [1,2,3,4]
    const init = 1
    const arraySum = array.reduce((accumulate, currentValue) => accumulate * currentValue, init)
    return arraySum
}

console.log(calculateSum())
console.log(calculateProduct())

// Ex 6:

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} Engine ${this.year}`
    }

}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model,year)
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}


  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());

  
 
  
  
  
  








