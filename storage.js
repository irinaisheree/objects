function storage(data){

    let result = new Map()

    for (let line of data) {
        line = line.split(" ")
        let product = line[0]
        let quantity = Number(line[1])

       if(!result.has(product)){
        result.set(product, quantity)
       } else{
       result.set(product, result.get(product) + quantity)
       }
    }
    for (let line of result) {
        console.log(`${line[0]} -> ${line[1]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)