function demo(data){
    let message = data.shift()

    let i = 0
    let command = data[i]
    i++

    while(command !== "Reveal"){
        let[action, text1, text2] = command.split(':|:')
        
        switch(action){
            case "InsertSpace":
                message = message.slice(0, Number(text1)) + " " + message.slice(Number(text1))
                console.log(message)
                break;
            case "Reverse":
                let index = message.indexOf(text1)
                if(message.includes(text1)){
                    message = message.replace(text1);
                    let reversedSubstring = "";
                    for (let char of text1) {
                        reversedSubstring = char + reversedSubstring;
                    }
                console.log(message)
        
                } else{
                    console.log("error")
                }
                break;
            case "ChangeAll":
                for (let el of message) {
                    if(el === text1){
                       message = message.replace(text1, text2)
                    }  
                }
                console.log(message)
                break;
        }
        command = data[i]
    i++
    }
    console.log(`You have a new text message: ${message}`)

}
demo([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])