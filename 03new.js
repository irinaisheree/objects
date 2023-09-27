function demo(data) {
    let spellBook = {}

    let i = 0
    let command = data[i]
   
    while (command !== "End") {
        data = command.shift().split(' ')
        let action= data[0]
        let hero = data[1]
        let spellname = data[2]
        


        switch (action) {
            case "Enroll":
                if (spellBook.hasOwnProperty(hero)) {
                    console.log(`${hero} is already enrolled.`)
                } else {
                    for (let j = 0; j < data.length; j++) {
                        spellBook[hero] = {
                            hero,
                            spellname
                        }
                    }
                }
                break;

            case "Learn":
                if (!spellBook.hasOwnProperty(hero)) {
                    console.log(`${hero} doesn't exist.`)
                }
                if (spellBook.hasOwnProperty(spellname)) {
                    spellBook[spellname] = 0
                    console.log(`${hero} has already learnt ${spellname}`)
                }
                spellBook[hero] = spellname
                break;

            case "Unlearn":
                delete spellBook[spellname]
                if (spellBook.hasOwnProperty(spellname)) {
                    console.log(`${hero} doesn't know ${spellname}.`)
                }

                if(!spellBook.hasOwnProperty(hero)){
                    console.log(`${hero} doesn't exist.`)
                }
                break;

        }

    command = data[i]
    i++
    }

if (command == 'End') {
    for (const key of spellBook) {
        console.log(`Heroes : ${hero}`)
    }
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