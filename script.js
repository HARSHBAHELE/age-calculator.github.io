let input = document.querySelector("input");
let button = document.querySelector(".calAge");
let result = document.querySelector(".h3");

function calculateAge() {
    let birthdayVal = input.value;
    if(birthdayVal ==="") {
        alert("please enter your birthday");
    } else {
        let age = getAge(birthdayVal);
        result.innerText=`Your age is ${age} ${age > 1 ? "year":"year"} old 🙅‍♂️😁`;
    }
}
function getAge(birthdayVal) {
    let currentDate = new Date();
    let birthdayDate = new Date(birthdayVal);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate()<birthdayDate.getDate())) {
        age--;
    }
    return age
}
button.addEventListener("click",calculateAge);