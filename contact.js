let Name = document.getElementById("nameinput");
let Email = document.getElementById("email");
let textarea = document.getElementById("query");
let button = document.getElementById("submitbutton");
let nameSmall = document.getElementById("nameSmall");
let emailSmall = document.getElementById("emailSmall");
let query = document.getElementById("query");
let number = document.getElementById("number")
let numberSmall = document.getElementById("numberSmall")

button.addEventListener("click",(e)=>{
    let text = Name.innerText
    console.log(text)
})




let validateInput = (input, regex, smallElement)=> {
    input.addEventListener("blur", (e) => {
        let text = e.target.value;

        if (regex.test(text)) {
            console.log("Success");
            smallElement.style.display = "none";
        } else {
            smallElement.style.display = "block";
        }
    });
}

let nameRegex = /^[a-zA-Z-' ]+$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let numberRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/



validateInput(Name, nameRegex, nameSmall)
validateInput(Email, emailRegex, emailSmall)
validateInput(number, numberRegex, numberSmall)