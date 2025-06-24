function runQ1() {
  const states = ['Rajasthan', 'Uttar Pradesh', 'Andhra Pradesh', 'Maharashtra', 'Odisha', 'Bihar'];
  const filtered = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
  document.getElementById('output1').textContent = JSON.stringify(filtered);
}

function runQ2() {
  let str = 'I love my India';
  let reversed = str.split(' ').reverse().join(' ');
  document.getElementById('output2').textContent = reversed;
}

function runQ3() {
  let string = ['I', '❤', 'INDIA'];
  string.splice(2, 1, 'INDONESIA');
  document.getElementById('output3').textContent = string.join(' ');
}

function runQ4() {
  let s = 'I love programming in JavaScript';
  let vowels = s.match(/[aeiou]/gi)?.length || 0;
  let consonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  document.getElementById('output4').textContent = `V: ${vowels}, C: ${consonants}`;
}

function runQ5() {
  let sentence = 'The sky is blue';
  let corrected = sentence.replace('blue', 'clear');
  document.getElementById('output5').textContent = corrected;
}

function runQ6() {
  const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
  const output = inputArr.filter(n => n > 5);
  document.getElementById('output6').textContent = output.join(', ');
}

function runQ7() {
  const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  const result = students.map(s => ({
    name: s.name,
    average: Math.round(s.scores.reduce((a, b) => a + b, 0) / s.scores.length)
  }));
  document.getElementById('output7').textContent = JSON.stringify(result, null, 2);
}

function runQ8() {
  let num = 456;
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + +digit, 0);
  }
  document.getElementById('output8').textContent = num;
}

function runQ9() {
  let paragraph = "JavaScript is a versatile programming language used for web development.";
  let wordCount = paragraph.trim().split(/\s+/).length;
  document.getElementById('output9').textContent = wordCount;
}

function runQ10() {
  let str = "Hello";
  document.getElementById('output10').textContent = str.split('').reverse().join('');
}
