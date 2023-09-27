function demo(data){
    let spellBook = {}

       


            let i = 0
            let command = data[i]
            i++
            while(command !== "End"){

        switch(action){
            case "Enroll":
                 if(spellBook.hasOwnProperty(hero)){
                console.log(`${hero} is already enrolled.`)
                 } else{
                    spellBook[hero]["name"] = hero
                 
                  
                    }
                break;
            case "Learn":
              if(!spellBook.hasOwnProperty(hero)){
                console.log(`${hero} doesn't exist.`)
              }
              if(spellBook.hasOwnProperty(spellname)){
                spellBook[spellname] = 0
                console.log(`${hero} has already learnt ${spellname}`)
            }
              spellBook[hero] = spellname
                break;
            case "Unlearn":
                delete spellBook[spellname]
                if(!spellBook.hasOwnProperty(hero)){
                    console.log(`${hero} doesn't know ${spellname}.`)
                }
                break;
        }
     command = data[i]
    i++

    }

    console.log("Heroes:")
    for (let el of spellBook) {
        console.log(spellBook)
        
    }
}

demo(["Enroll Stefan",

"Enroll Peter",

"Enroll Stefan",

"Learn Stefan ItShouldWork",

"Learn John ItShouldNotWork",

"Unlearn George Dispel",

"Unlearn Stefan ItShouldWork",

"End"])