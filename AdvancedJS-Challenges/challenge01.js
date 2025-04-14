//Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

function simulateAsyncTask() {
  setTimeout(() => {
    console.log("Task Finished");
  }, 2000);
  console.log("Task Started");
}

// simulateAsyncTask();

//Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).


function simulateMultipleTasks() {
    function task(taskNumber,delay) {
        return new Promise((resolve)=>{
            setTimeout(() => {
                console.log(`Task ${taskNumber} finished`);
                resolve()
            }, delay);
        })
    }
    Promise.all([
        task(1,1000),
        task(2,2000),
        task(3,3000)
    ])
}

// simulateMultipleTasks()


//Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data="Fetch Data"
        callback(data)
    }, 2000);
}

fetchDataWithCallback(function(result){
    console.log(result);
})

