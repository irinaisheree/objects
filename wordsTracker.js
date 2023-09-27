function wordsTracker(data){

    let map = new Map()

    let wordsToCheck = data.shift().split(' ')
    wordsToCheck.forEach(word => {
        map.set(word, 0); 
    });

    for (let line of data) {
        for (let word of wordsToCheck) {
            if(line === word){
                let currentQuantity = map.get(line)
                map.set(line, currentQuantity + 1)
            } 
        } 
    }

    let sortedWords = Array.from(map.entries()).sort((a,b) => b[1] - a[1])
    sortedWords.forEach(element =>{
        console.log(`${element[0]} - ${element[1]}`)
    })
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])