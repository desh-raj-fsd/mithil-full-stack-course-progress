//Challenge 1

let teas=["green tea","black tea","chai","oolong tea"]
let selectedTeas=[]
for (let i = 0; i < teas.length; i++) {
    if(teas[i]=='chai'){
        break;
    }
    
    selectedTeas.push(teas[i])
}

//Challenge 2 

let cities=["London","New York", "Paris", "Berlin"]
let visitedCities=[]

for (let i = 0; i < cities.length; i++) {
    if(cities[i]==="Paris"){
        continue
    }
    visitedCities.push(cities[i])
}

//Challenge 3

let numbers=[1,2,3,4,5]
let smallNumbers=[]
for (const num of numbers) {
    if(num===4){
        break
    }
    smallNumbers.push(num)
}

//Challenge 4

let teaTypes = ["chai", "green tea", "herbal", "black tea "];
let preferredTea = [];

for (let i = 0; i < teaTypes.length; i++) {
  if (teaTypes[i] === "herbal") {
    continue;
  }
  preferredTea.push(teaTypes[i]);
}

//Challenge 5

let citiesPopulation={
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}

let cityNewPopulation={}

for (const city in citiesPopulation) {
    if (city==="Berlin") {
        break
    }
   cityNewPopulation[city]= citiesPopulation[city]
}

//Challenge 6

let worldCities = {
  Sydney: 8900000,
  Tokyo: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let largeCities={}

for (const city in worldCities) {
    if (worldCities[city]<3000000 ) {
        continue
    }
    largeCities[city]= worldCities[city]
}

//Challenge 7

let teaCollection=["earl",'herbal','green','chai']
let availableTea=[]
teaCollection.forEach((tea) => {
    if (tea==='chai') {
        return
    }
    availableTea.push(tea)
});

//Challenge 8