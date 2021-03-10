//Part1

const employeeList = [

    {
        name: "Amy",
        scores: []
    },

    {
        name: "Beth",
        scores: []
    },

    {
        name: "Chuck",
        scores: []
    },

    {
        name: "Dave",
        scores: []
    },

    {
        name: "Eric",
        scores: []

    },

    {
        name: "Fran",
        scores: []
    },

    {
        name: "Gina",
        scores: []
    },

    {
        name: "Henry",
        scores: []
    }

];

//loop through employee list array
let max = 7;
let min = 3;
let max2 = 100;
let min2 = 61;
for(let employee of employeeList){
    const randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(randomNum);
    for(let i =1; i <= randomNum; i++){
        randomNum2 = Math.floor(Math.random() * (max2 - min2 + 1) ) + min2;
        employee.scores.push(randomNum2);
        //console.log(employee.scores)
    }   
}
//display of employee list
console.log("The employee list");
for (const emp of employeeList){
    console.log(`The employee name :${emp.name}`);
    console.log(`The employee scores: ${emp.scores}`);

}

//Part2
console.log("The complete employee results");
const employeeresults = employeeList.map(empObj => 
    {
        tests = empObj.scores.length
        return {
            Name: empObj.name,
            Scores: empObj.scores,
            No_of_test: tests,
            minScore: Math.min(...empObj.scores),
            avgScore: empObj.scores.reduce((acc, value) => acc + value,0)/empObj.scores.length
        }
    }
);
console.log(employeeresults);   
