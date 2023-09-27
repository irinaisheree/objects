function addressBook(data){

    let obj = {}
    for (let line of data) {
        let[name, address] = line.split(":")

       obj[name] = address
        
    }
    let entries = Object.entries(obj)
    entries.sort((a,b) => a[0].localeCompare(b[0]))
 
  for (let line of entries) {
      console.log(`${line[0]} -> ${line[1]}`)
  }
   
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])