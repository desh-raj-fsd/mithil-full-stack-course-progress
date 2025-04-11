function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({fname:'Java', lname:"Script"})
        }, 3000);
    })
}


async function getUser() {
    try{
        console.log('Fetching User data..');
        let userData=await fetchUser()
        console.log("user data: ", userData);        
    }catch(error){
        console.log("error fetching data", error);
    }

}

getUser()