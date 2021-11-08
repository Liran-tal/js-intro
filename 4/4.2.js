function precentageToGrades(score) {
    let grade = '';
    if((score >= 0) && (score <= 100)){
        if ((score < 65)) {
            grade = 'F';
        }
        else if (score < 70) {
            grade = 'D';
        }
        else if (score < 80) {
            grade = 'C';
        }
        else if (score < 90) {
            grade = 'B';
        }
        else {
            grade = 'A';
        }
        return grade;
    }
    return undefined;
}


console.log(`Score = -1, Grade = ${precentageToGrades(-1)}`);
console.log(`Score = 0, Grade = ${precentageToGrades(0)}`);
console.log(`Score = 64, Grade = ${precentageToGrades(64)}`);
console.log(`Score = 65, Grade = ${precentageToGrades(65)}`);
console.log(`Score = 70, Grade = ${precentageToGrades(70)}`);
console.log(`Score = 80, Grade = ${precentageToGrades(80)}`);
console.log(`Score = 90, Grade = ${precentageToGrades(90)}`);
console.log(`Score = 100, Grade = ${precentageToGrades(100)}`);
console.log(`Score = 101, Grade = ${precentageToGrades(101)}`);
