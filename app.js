const corrAns = ['A', 'A', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault();
  scrollTo(0, 0);
  let score = 0;
  let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
  userAns.forEach((answer, index) => {
    if (answer === corrAns[index]) {
      score += 25;
    }
  });

    // Show result 
    result.classList.remove('d-none');

    let out = 0;
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${out} %`;
      if (out === score) {
        clearInterval(timer);
      } else {
        out++;
      }
    }, 22); 
});