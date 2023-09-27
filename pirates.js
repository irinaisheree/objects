function pirates(data){
    let plantNumber = Number(data.shift().split(''))

    let obj = {}
  let i = 0
  let line = data[i]
  i++



    for(let plants = 0; plants < plantNumber; plants++){
        let curLine = data[plants]
        let[plant, rarity] = curLine.split("<->")

        if(obj.hasOwnProperty(plant)){ 
            obj[plant] = 0
        }
        obj[plant] = Number(rarity)   
     }


     while(line !== "Exhibition"){
    for(curLine = Number(plantNumber); curLine < data.length; curLine++){

     line = line.split(": ")
     let command = line[0]
     let[plant, rating] = line.split(" - ")

     switch(command){
        case "Rate":
            let rateCount = 0
            obj[plant] = rating
            rating += rating
            rateCount++
            break;
        case "Update":
            let newRarity = rating
            obj[plant] = newRarity
            break;
        case "reset":
            delete obj[rating]
            break;
     }
    }

    line = data[i]
  i++
     }
  let avg = rating / rateCount
for (let el of object) {
      console.log(`Plants for the exhibition:
      - ${plant}; Rarity: ${rarity}; Rating: ${avg}`)
} 
}
pirates(["3",
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