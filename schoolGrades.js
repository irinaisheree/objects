function schoolGrades(data){

    let result = new Map()

    for (let line of data) {
        let grade = line.split(' ')
        let name = grade.shift()

        if(!result.has(name)){
           result.set(name, grade)
       }else{
        let newGrade = result.get(name)
        for (let grades of grade) {
            newGrade.push(grades);
          }
          result.set(name, newGrade)
       }
    }
    let sorted = Array.from(result).sort((a, b) => {
        return a[0].localeCompare(b[0]);
      });

      for (const [name, grades] of sorted) {
        let sumGrade = 0;
        for (currentGrade of grades) {
        sumGrade += Number(currentGrade);
      }
      let avg = sumGrade / grades.length;
      console.log(`${name}: ${avg.toFixed(2)}`);
   

}
}



schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)