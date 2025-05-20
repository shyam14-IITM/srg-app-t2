 const handleRemove=(key) => { //  function for removal of tasks

        setTasks(
                tasks.filter((task, i) => {
                return !(task.key == key);
            })
        );
        progress()
    
}


    const handleMarkDone=(key)=>{
       let tempTasks=[...tasks];
       tempTasks.forEach((element)=>{
        if(element.key==key){
            element.isDone=!element.isDone;
        }
       })
       setTasks(tempTasks);
       console.log(tasks); 
       
    }
    const progress=()=>{
        let done=0;
        if(tasks.length){
            tasks.forEach((task)=>{
            if (task.isDone){
                done+=1;
            }
        })
        let per=100*(done/tasks.length)
        per= Math.floor(per*100)/100
        setPercent(per)
        }
        
        
    }
    export {progress,handleRemove,handleMarkDone};