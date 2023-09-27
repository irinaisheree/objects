function demo(data){
    let allProducts = {}
    let sold = 0



    for (let i = 0; i < data.length ; i++) {
        allProducts[product] = {
            quantity
        }
    }

command = data.shift()

while(command !== "Complete"){


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
            } 
            let curQuantity = obj[product]
            if(quantity > curQuantity){
                obj[product] -= curQuantity
               console.log(`There aren't enough ${product}. You sold the last ${curQuantity} of them.`)
                delete obj[product]
                sold += quantity
            } else{
                curQuantity -= quantity
                sold += quantity
                if(curQuantity <= 0){
                    delete obj[product]
                } else{
                obj[product] = curQuantity
                console.log(`You sold ${quantity} ${product}.`)
                }

            }

            break;
    }


    command = data.shift()
}
    

console.table(obj)



}

demo(["Receive 105 cookies",
"Receive 10 donuts",
"Sell 10 donuts",
"Sell 1 bread",
"Complete"])

console.log("----------")


demo((["Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"]))