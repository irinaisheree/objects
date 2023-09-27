function demo(data){

    let message = data.shift()

    let i = 0
    let command = data[i]
    i++

    while(command !== "End"){
        command = command.split('')
        let action = command[0]
        let text1 = command[1]
        let text2 = command[2]

        switch(action){
            case "Translate":
                for (let el of message) {
                    if(message.includes(text1)){
                      message = message.replace(text1, text2)
                    }   
                }
                console.log(message)
                break;
            case "Includes":
            
                    if(message.includes(text1)){
                        console.log("True")
                    } else{
                        console.log("False")
                    }
                
                break;
            case "Start with":
              
                    if(message.startsWith(text1)){
                        console.log("True")
                     } else{
                        console.log("False")
                     }
                    
                break;
            case "Lowercase":
                message = message.toLowerCase()
                console.log(message)
                break;
            case "FindIndex":
             let lastIndex = message.lastIndexOf(text1)
             console.log(lastIndex)
                break;
            case "Remove":
                let index = Number(text1)
                let count = Number(text2)
                let substring = message.substring(index, count + index)
                message = message. replace(substring, "")
                console.log(message)
                break;
        } 
        command = data[i]
        i++
      
    }

}
demo(["*S0ftUni is the B3St Plac3**",

"Translate 2 o",

"Includes best",

"Start with the",

"Lowercase",

"FindIndex p",

"Remove 2 7",

"End"])