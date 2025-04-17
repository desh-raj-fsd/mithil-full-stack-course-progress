const fs=require('fs')
const filePath ="./tasks.json"


const loadTask= ()=>{
    try {
        const dataBuffer=fs.readFileSync(filePath)
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}


const saveTasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks)
    fs.writeFileSync(filePath,dataJSON)
}

const addTask= (newTask)=>{
    const tasks=loadTask()
    tasks.push(newTask)
    saveTasks(tasks)
    console.log("Task Added");
    
}

const listTasks=()=>{
    const tasks=loadTask()
    tasks.forEach((task,index)=> console.log(task));
}

const command=process.argv[2]
const argument=process.argv[3]

if (command==='add'){
    addTask(argument)
}else if(command==='list'){
    listTasks()
} else{
    console.log("Command not found");
}