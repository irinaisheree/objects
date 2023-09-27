function demo(data){

    let obj = {}

    for (let line of data) {
        line = line.split(' ')
        let name = line[0]
        let number = line[1]

        obj[name] = number     
    }

    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
        
    }
     
    }
demo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
