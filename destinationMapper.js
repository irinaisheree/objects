function demo(data){
    let pattern = /(?<group>[=||\/])(?<destination>[A-Z][A-Za-z]{2,})\1/gm;
    let match = pattern.exec(data)

    let arr = []
    while(match){
        let place = match.groups.destination
        arr.push(place)
        match = pattern.exec(data)
    }
    console.log(`Destinations: ${arr.join(", ")}`)

    let length = arr.join("").length
    console.log(`Travel Points: ${length}`)   
    }

demo("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")