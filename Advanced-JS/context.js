const person={
    name:"JS",
    greet(){
        console.log(`Hi I am ${this.name}`);
        
    }
}

person.greet()

const greetFunction=person.greet
greetFunction() //wont work due to lack of context

const bound =person.greet.bind({name:"C++"}) //new context is bound 
bound()