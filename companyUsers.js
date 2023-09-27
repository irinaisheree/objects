function companyUsers(input){

    let companies = {};

    input.forEach(pair => {
        let [company, id] = pair.split(" -> ");

        if(!companies.hasOwnProperty(company)){
            companies[company] = []
        }
        companies[company].push(id)     
    });

    let sortedCompanies = Object.entries(companies);
    sortedCompanies.sort((a,b) => a[0].localeCompare(b[0]))

    for (let element of sortedCompanies) {
        let companyName = element[0]
        console.log(companyName)
        let set = new Set(element[1])
        for(let number of set){
            console.log(`-- ${number}`)
        }
    }
}

companyUsers(['SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345','HP -> BB12345'])