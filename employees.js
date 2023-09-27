function employees(data){

  let obj = {}

  for(let name of data){
    obj[name] = name.length
  }
  
  for (let name in obj) {
    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`)
  }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )