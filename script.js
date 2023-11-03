let random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number)
let userNumber = document.getElementById("user-input").value;

function check(){
    let chances = 10;
    while( chances != 0){
        if(random_number == userNumber){
            console.log('User entered correct number')
        } else if(userNumber > random_number){
            console.log('User have entered the number greater than the expected number')
        } else{
            console.log('User have entered the less number as the expected number')
        }
        chances--;
    }
}