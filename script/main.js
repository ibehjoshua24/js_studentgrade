//check student grade task

function studentGrade() {
    grade = prompt('input the student grade here')
    if(grade >= 90 && grade <= 100) {
        console.log('A = Excellent')
    }else if(grade >= 75 && grade <= 89) {
        console.log('B = Very Good')
    }else if(grade >= 60 && grade <= 74) {
        console.log('C = Good')
    }else if(grade >= 50 && grade <= 59) {
        console.log('D = Fair')
    }else if(grade >= 0 && grade <= 49) {
        console.log('F = Fail')
    }else
        console.log('null')
}

studentGrade()