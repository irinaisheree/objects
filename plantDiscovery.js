function demo(data){

    let obj = {}
    let numberOfPlants = Number(data.shift())


    for(let i = 0; i < numberOfPlants; i++){
        let [plant, rarity] = data.shift().split("<->")
        rarity = Number(rarity)
        obj[plant] = {
          plant,
         rarity,
          rating : 0,
          count: 0
        }
        
    }

   let i = 0
   let command = data[i]
   i++


   while(command !== "Exhibition"){

    command = command.split(": ")
    let action = command[0]
    command = command[1].split(" - ")

    if (obj.hasOwnProperty(command[0])) {

    switch(action){
        case "Rate":
            let plant = command[0]
            let rating = Number(command[1])
           let counter = 1
           obj[plant][`rating`] += rating;
           obj[plant][`count`] += counter;
            
            break;
        case "Update":
            let plantT = command[0]
            let newRarity = Number(command[1])
            obj[plantT]["rarity"] = newRarity
            break;
        case "Reset":
            let resetPlant = command[0];
            obj[resetPlant][`rating`] = 0;
            obj[resetPlant][`count`] = 0;
            break;
        
        }
    }else{
        console.log("error")
    }
   
    command = data[i]
    i++
    }

    if(command === "Exhibition"){
        console.log("Plants for the exhibition:")
        for (let key in obj) {
            let avg = obj[key][`rating`] / obj[key][`count`] || 0;
            console.log(`- ${key}; Rarity: ${obj[key][`rarity`]}; Rating: ${(avg).toFixed(2)}`)
            
        }
        
    }
   }


demo(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

console.log("----------")

demo(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])