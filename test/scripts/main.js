const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lionel-messi.jpg"){
        myImage.setAttribute("src", "images/messi-3.jpg");
    } else {
        myImage.setAttribute("src", "images/lionel-messi.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName;
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Messi is a god. ${myName}`; 
    }
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Messi is a god. ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

