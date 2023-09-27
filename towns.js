function towns(data){


for (let townInfo of data) {
    
    let [townName, latitude, longitude] = townInfo.split(' | ')
    let curTown = {
        town: townName,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    }
    console.log(curTown)
} 
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])