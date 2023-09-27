function demo(data){ 
    let obj = {}
    let allMoneySpent = 0
    

    let i = 0
    let command = data[i]
    i++

    for (let j = 0; j < data.length -1; j++) {
        command = data[j]
        command = command.split(" ")
        let action = command[0]
        let name = command[1]
        let price = Number(command[2])
        let mariaMoney = 0
        obj["Maria"] = {
        name,
        price,
        mariaMoney,
      };
    }

    while(command !== "End"){

        switch(action){
            case "Deliver":
                if(!obj.hasOwnProperty(name)){
               
                obj["Maria"][mariaMoney] = price

                allMoneySpent += price
                }

                break;
            case "Return":
                if(!obj.hasOwnProperty(name)){
                    if(price >=  obj["Maria"][mariaMoney] ){
                    obj["Maria"][mariaMoney] = mariaMoney - price
                    if(obj["Maria"][mariaMoney] <= 0){
                        delete obj["Maria"][name]
                    }
                    obj["Maria"][mariaMoney] = mariaMoney + price
                }
                allMoneySpent -= price
            }

                break;
            case "Sell":
                if(!obj.hasOwnProperty(name)){
                    obj["Maria"]["ClientName"] = name
                    obj["Maria"]["mariaMoney"] += price
                    } else{
                        obj["Maria"]["mariaMoney"] += price
                    }
                    allMoneySpent += price
    
                break;
        }

        command = data[i]
    i++
    }


}

demo(["Deliver Micro 10000.00",
"Sell Nick 500.00",
"Sell Antony 260.50",
"Deliver Micro 2000.50",
"End"])