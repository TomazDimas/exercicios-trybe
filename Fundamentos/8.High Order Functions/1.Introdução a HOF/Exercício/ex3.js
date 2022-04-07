const gradeInput = (correct, answer, callback) => {
  return callback(correct, answer);
}

const checkAnswer = (rightArray, tryArray) => {
  let grade = 0;
  for (let i = 0; i < rightArray.length; i += 1) {
    rightArray[i] === tryArray[i] ? grade += 1 : grade = grade;
  }
  return grade
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(gradeInput(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));