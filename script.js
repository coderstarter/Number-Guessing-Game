let random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number)
const btn = document.getElementById('submit');
let chances_left = document.getElementById('chances');
let count = document.getElementById('count');
let chances = 10;
function check(e) {
    e.stopPropagation();
    let userNumber = document.getElementById("user-input");
    let guessed_number = userNumber.value;
    console.log(guessed_number);
    chances_left.innerText = '';
    if (chances > 0) {
        if (random_number == guessed_number) {
            chances_left.classList.add('right');
            chances_left.classList.remove('wrong')
            chances_left.innerText = 'User entered correct number';
            chances = 0;
            return;
        } if (guessed_number > random_number) {
            chances_left.classList.remove('right');
            chances_left.classList.add('wrong')
            chances_left.innerText = 'User have entered the number greater than the expected number';
        } if (guessed_number < random_number) {
            chances_left.classList.remove('right');
            chances_left.classList.add('wrong')
            chances_left.innerText = 'User have entered the less number as the expected number';
        }
        chances--;
        count.innerText = `Chances left ${chances}`;
    }
    if(chances == 0){
        btn.disabled = true;
        chances_left.disabled = true;
        let userChoice = confirm('Do you want to play the game again !');
        if(userChoice) {
            btn.disabled = false;
            chances_left.disabled = false;
            chances = 10;
            count.innerText = `Chances left ${chances}`;
        }
    }
}
btn.addEventListener('click', check);