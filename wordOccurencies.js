function wordOccurencies(data){
    let obj = {}


    for (let word of data) {
       
    
        if(!obj.hasOwnProperty(word)){
           
            obj[word] = 0
        } 
            obj[word] =obj[word] + 1 
        
    }

    let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1])
   for (let [word, times] of sorted) {
     console.log(`${word} -> ${times} times`)
   }


 }

wordOccurencies(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
)