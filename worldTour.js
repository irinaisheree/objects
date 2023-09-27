function demo(data){
    let destination = data.shift()

   let command = data.shift()

    while(command !== "Travel"){
        command = command.split(":")
        let action = command[0]
        let w1 = command[1]
        let w2 = command[2]

        switch(action){
            case "Add Stop":
                w1 = Number(w1)
                if(w1 >= 0 && w1 < destination.length){
                    destination = destination.split("")
                  destination.splice(w1, 0, w2)
                  destination = destination.join("")
                }
                console.log(destination)
                break;
            case "Remove Stop":
                w1 = Number(w1)
                w2 = Number(w2)
                if(w1 >= 0 && w1 < destination.length && w2 >= 0 && w2 < destination.length){
                   let substring = destination.substring(w1, (w2 + 1))
                   destination = destination.replace(substring, "")
                }
                console.log(destination)
                break;
            case "Switch":
                if(destination.includes(w1)){
                  
                            destination = destination.replace(w1, w2)
                        }
                 console.log(destination)
                
                break;
        }
        command = data.shift()
    }

    if(command === "Travel"){
        console.log(`Ready for world tour! Planned stops: ${destination}`)
    }

}
// demo(["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"])

// console.log("-------------")

demo(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])