function demo(data){

    let text = data[0]

    let pattern = /([#]|[|])(?<product>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cals>[0-9]{1,5})\1/gm

   let cals = 0
   let buff = ""
   let match = pattern.exec(text)

   while(match){
        let item = match.groups["product"]
        let date = match.groups["date"]
        let cal = Number(match.groups["cals"])
        cals += cal
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${cal}\n`
        match = pattern.exec(text)
        }

  
        let food = Math.floor(cals / 2000)
           console.log(`You have food to last you for: ${food} days!`)
            console.log(buff)
}


demo(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])