function demo(data) {
    let arr = data.shift().split(' ')
    let moves = 0
 
 
    let i = 0
    let command = data[i]
    i++
 
    while (command !== "end") {
        let curCommands = command.split(' ')
        let command1 = Number(curCommands[0])
        let command2 = Number(curCommands[1])
 
        for (let curNum = 0; curNum < arr.length; curNum++) {
 
            let curNum = arr[command1]
            let nextNum = arr[command2]
 
            let curNumIndex = arr.indexOf(curNum)
            let nextNumIndex = arr.indexOf(nextNum)
            moves++
 
 
            if (command1 === command2 || curNumIndex >= arr.length || curNumIndex < 0 || nextNumIndex >= arr.length || nextNumIndex < 0) {
                let place = arr.length / 2
                arr.splice(place, 0, `-${moves}a`, `-${moves}a`)
 
                console.log("Invalid input! Adding additional elements to the board")
                break
            }
            if (curNum === nextNum) {
        
                arr.splice(curNumIndex, 1)
                nextNumIndex = arr.indexOf(nextNum)
                arr.splice(nextNumIndex, 1)
                console.log(`Congrats! You have found matching elements - ${curNum}!`)
            } else {
                console.log("Try again!")
            }
            break
        }
        command = data[i]
        i++
    }
 
    if (arr.length === 0) {
        console.log(`You have won in ${moves} turns!`)
    }
 
    if (command = "end" && arr.length > 0) {
        console.log(`Sorry you lose :(`)
        console.log(arr.join(' '))
    }
}
demo( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])