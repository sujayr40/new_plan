const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

var agree = document.getElementById("agree");
var btn = document.getElementById("btn");


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function enable() {
    if(agree.checked) {
        btn.removeAttribute("disabled");
     } else {         
        btn.disabled = "true";
    }
    
};

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
};

function passOnly(input) {
    var regex = /[^a-zA-Z0-9_]/gi;
    input.value = input.value.replace(regex, "");
};