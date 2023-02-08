const car={
    brand:"Mercedes Benz",
    model:"a class",
    color:"silver",

    print: function (){
        return this.brand + " is " + this.model + " and has the color "+ this.color;
    }

}
console.log(car.print());

const car2={
    brand:"BMW",
    model:"BMW 8er Coupé",
    color:"red",
   
  
  
  
    print: function (){
        return this.brand + " is " + this.model + " and has the color "+ this.color;
    }


}
console.log(car2.print());

const car3={
    brand:"Lamborghini",
    model:"Avantador",
    color:"pink",
   
  
  
  
    print: function (){
        return this.brand + " is " + this.model + " and has the color "+ this.color;
    }


}
console.log(car3.print());


const cat={
    breed:"British Shorthair",
    gender:"female",
    color:"cinnamon",


    print: function (){
        return this.breed + " is a sweet " + this.gender + " and has the color "+ this.color;
    }


}
console.log(cat.print());

const dog={
    breed:"Samojede",
    gender:"male",
    color:"white",

    print: function (){
        return this.breed + " is a sweet dog " + " " + " and has the color "+ this.color;
    }

}
console.log(dog.print());



const p1={
    p1:"Lamia",
    age:"21",
    birthdayyear:"2001",

    print:function(){
        return this.p1 + " was born in Austria "+ this.birthdayyear +" and is "+ this.age + " years old ";
    }

}

console.log(p1.print());

document.getElementById("car").innerHTML = `${car.print()}
<br>${car2.print()}<br>${car3.print()}`;

document.getElementById("cat").innerHTML = `${cat.print()}`;

class carr{
    brand;
    model;
    color;
    
    constructor(brand , model, color){
        this.brand=brand;
        this.model=model;
        this.color=color;
    }
    
    fullData(){
        return  `${this.brand} is  ${this.model} and has the color  ${this.color}`
    
    }



    }
    const carrs= new carr("Mercedes", "E-Class","White");
    console.log(carrs.fullData());
    
    class animal{
        breed;
        color;

        constructor(breed , color){
            this.breed=breed;
            this.color=color;
        }

        fullData(){
            return `${this.breed}is a cat and has the color ${this.color}`
        }
    }
     const anicat= new animal("British Shorthair", "cinnamon");
     console.log(anicat.fullData());

     document.getElementById("anicat").innerHTML=anicat.fullData()
     document.getElementById("carrs").innerHTML=carrs.fullData()

    
    


     
    
        
    




