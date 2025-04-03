//Challenge 1

let teaFlavors=["green tea","black tea", "oolong tea"]

let firstTea=teaFlavors[0]

//Challenge 2

let cities=["london","Tokyo","paris","new york"]

let favoriteCity=cities[2]

//Challenge 3

let teaTypes=["herbal tea", "white tea", "masala tea"]

teaTypes[1]="jasmine tea"

//Challenge 4

let citiesVisited =["Mumbai", "Sydney"]

// citiesVisited[citiesVisited.length]="Berlin"
citiesVisited.push("Berlin")

//Challenge 5

let teaOrders=["chai","iced tea","matcha tea","earl grey"]
teaOrders.pop()

//Challenge 6

let popularTeas=["oolong tea","green tea", "chai"]
let softCopyTeas=popularTeas

//Challenge 7

let topCities=["Berlin","Singapore","New York"]
let hardCopyCities=[...topCities]

//Challenge 8
let europianCities=["Paris", "Rome"]
let asianCities=["Tokyo", "Bangkok"]

let worldCities=europianCities.concat(asianCities)

//Challenge 9

let teaMenu=["masala tea","oolong tea","green tea","earl tea"]

let menuLength=teaMenu.length

//Challenge 10

let cityBucketList=["Kyoto","London","Cape Town", "Vancouver"]

let isLondon=cityBucketList.includes("London")

