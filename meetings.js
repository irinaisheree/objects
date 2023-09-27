function meetings(data){
    let obj = {}

    for (let line of data) {
        line = line.split(" ")
        let day = line[0]
        let name = line[1]   

        if(obj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
          } else{
            obj[day] = name 

            console.log(`Scheduled for ${day}`)
          }
      
        }     
        for (let key of Object.keys(obj)) {
            console.log(`${key} -> ${obj[key]}`)
            
          }
        
    }

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])