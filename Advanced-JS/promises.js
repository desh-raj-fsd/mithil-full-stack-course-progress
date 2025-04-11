function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true
            if(success){
                resolve("Data Fetched Successfully")
            }else{
                reject("Error")
            }
        },3000)
    })
}


fetchData()
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))