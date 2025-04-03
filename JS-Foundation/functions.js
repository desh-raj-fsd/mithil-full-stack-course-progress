//Challenge 1

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

let teaOrder = makeTea("Lemon Tea")

//Challenge 2

function orderTea(teaType){
    function confirmOrder(){
        return `Order Confirmed`
    }
    return confirmOrder()
}
// console.log(orderTea("green tea"))

//Challenge 3

const calculateTotal=(price,quantity)=>{
    return(price*quantity)
}

let totalCost=calculateTotal(499,100)

//Challenge 4

function makeTea(typeOfTea) {
    return`maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
   return teaFunction("earl grey")
}

processTeaOrder(makeTea)

//Challenge 5

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker();
console.log(teaMaker("GreenTea"));