function demo(data){
    let username = data.shift()

    let i = 0
    let command = data[i]
    i++

    while(command !== "Registration"){
        command = command.split(" ")
        let action = command[0]
        let w1 = command[1]
        let w2 = command[2]

        switch(action){
            case "Letters":
                if(w1 === "Lower"){
                    username = username.toLowerCase()
                    console.log(username)
                } else if(w1 === "Upper"){
                    username = username.toUpperCase()
                    console.log(username)
                }
                break;
            case "Reverse":
                w1 = Number(w1)
                w2 = Number(w2)
                if(w1 >= 0 && w1 < username.length && w2 >= 0 && w2 < username.length){
                let substring = username.substring(w1, w2 +1)
                substring = substring.split("").reverse().join("")
                console.log(substring)
                }
                break;
            case "Substring":
                if(username.includes(w1)){
                    let index = username.indexOf(w1)
                    let substring = username.substring(index, index + w1.length)
                    username = username.replace(substring, "")
                    console.log(username)

                } else{
                    console.log(`The username ${username} doesn't contain ${w1}.`)
                }
                break;
            case "Replace":
                for (let el of username) {
                    
                
                if(el === w1){
                    username = username.replace(w1, "-")      
                }
            }
            console.log(username)
            
                break;
            case "IsValid":
                if(username.includes(w1)){
                    console.log("Valid username.")
                } else{
                    console.log(`${w1} must be contained in your username.`)
                }
                break;
        }



        command = data[i]
    i++
    }

}
// demo(["John",
// "Letters Lower",
// "Substring SA",
// "IsValid @",
// "Registration"])

// console.log("------------")

demo((["ThisIsSoftUni",
"Reverse 1 3",
"Replace S",
"Substring hi",
"Registration"]))