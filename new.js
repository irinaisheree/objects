function demo(data){
    let plantNumber = Number(data.shift())

    let obj = {}

    
    for (let i = 0; i < plantNumber; i++) {
        let [plant, rarity] = data.shift().split(`<->`)
            obj[plant] = {
            plant,
            rarity,
            rating: 0,
            count: 0,
        };
    }
    let currentRow = data.shift();

    while (currentRow !== `Exhibition`) {
        let command = currentRow.split(` - `).join(` `).split(` `);

        if (obj.hasOwnProperty(command[1])) {
            switch (command[0]) {
                case `Rate:`:
                    let counter = 1;
                    let plant = command[1];
                    let rating = Number(command[2]);

                   obj[plant][`rating`] += rating;
                   obj[plant][`count`] += counter;

                    break;
                case `Update:`:
                    let plantT = command[1];
                    let newRarity = Number(command[2]);
                    obj[plantT][`rarity`] = newRarity;

                    break;
                case `Reset:`:
                    let resetPlant = command[1];
                    obj[resetPlant][`rating`] = 0;
                    obj[resetPlant][`count`] = 0;
                    break;
            }
        } else {
            console.log(`error`);
        }

        currentRow = data.shift();
    }

    console.log(`Plants for the exhibition:`);

    for (const key in obj) {
        let averageCount = obj[key][`rating`] / obj[key][`count`] || 0;
        console.log(`- ${key}; Rarity: ${obj[key][`rarity`]}; Rating: ${(averageCount).toFixed(2)}`);
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