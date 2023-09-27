function makeADictionary(data){

 let parsedArr = {}

 data.forEach(line => {
    let obj = (JSON.parse(line))
    let term = Object.keys(obj)[0]
    parsedArr[term] = obj[term]

    
 });

 Object.keys(parsedArr)
 .sort((a,b) => a.localeCompare(b))
 .forEach((key) => {
    console.log(`Term: ${key} => Definition: ${parsedArr[key]}`)
 
 })
 }


makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )