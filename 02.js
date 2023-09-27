function demo(data){
    let numberOfStrings = data.shift()
    let buff = " "

    for (let line of data) {
        
    
    let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1:\[(?<string>[A-Za-z]{8,})\]/gm


    let match = pattern.exec(line)
if(match){
    let pattern1 =/\[(?<string>\w{8,})]/gm
    let match1 = pattern1.exec(line)
    let pattern2 = /(?<command>[A-Z][a-z]+)/
    let com = pattern2.exec(line)

    match1 = match1.shift().split('')
    for (let el of match1) {
    
        if(el.charCodeAt(match1) >= 65 && el.charCodeAt(match1) <= 90 || el.charCodeAt(match1) >= 97 && el.charCodeAt(match1) <= 122){
            el = el.charCodeAt(el)
            buff +=  el + " "
        } 

    }
    console.log(`${com[0]}:${buff}`)
       

} else{
    console.log("The message is invalid")
}

    }
}
demo(["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"])