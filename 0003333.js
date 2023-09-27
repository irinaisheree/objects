function demo(data){
    let obj = {}
    
    let sold = 0


    let command = data.shift()

    while(command !== "Complete"){
        command = command.split(" ")
        let action = command[0]
        let quantity = Number(command[1])
        let product = command[2]

        switch(action){
            case "Receive":
            if(quantity > 0){
                if(!obj.hasOwnProperty(product)){
                    obj[product] = quantity
                } else{
                    quantity += quantity
                    obj[product] = quantity
                }
            }
            break;
            case "Sell":
                if(!obj.hasOwnProperty(product)){
                   console.log(`You do not have any ${product}.`)
                } else{
                    sold += quantity
                let curQuantity = obj[product]
                if(quantity > curQuantity){
                    obj[product] -= curQuantity
                   console.log(`There aren't enough ${product}. You sold the last ${curQuantity} of them.`)
                    delete obj[product]
                } 
                    if(curQuantity - quantity <= 0){
                         console.log(`You sold ${quantity} ${product}.`)
                        delete obj[product]
                    } else if(obj.hasOwnProperty(product) && curQuantity > 0){
                    obj[product] = curQuantity - quantity
                    console.log(`You sold ${quantity} ${product}.`)
                    }break
                }
                }
    
        
        command = data.shift()
    }

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
        
    }
    console.log(`All sold: ${sold} goods`)


}

// demo(["Receive 105 cookies",
// "Receive 10 donuts",
// "Sell 10 donuts",
// "Sell 1 bread",
// "Complete"])

// console.log("----------")


demo(["Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"])