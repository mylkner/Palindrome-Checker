const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

function checker() {
  
  let input = inputText.value;
  let regex = /[\W_]/g;
  let str = input.toLowerCase().replace(regex, "");

  //strr = string reverse
  
  let strr = str.split("").reverse().join("");
  
  if (input == "") {
    alert("Please input a value")
  } else if (str == strr) {
    inputText.value = "";
    result.style.display = "block";
    const HTMLString = `${input} is a palindrome`;
    result.innerHTML = HTMLString;
  } else {
    inputText.value = "";
    result.style.display = "block";;
    const HTMLString = `${input} is not a palindrome`; 
    result.innerHTML = HTMLString;
  }
};

checkButton.addEventListener("click", checker);

window.addEventListener("keypress", ({key}) => {
  if (key == "Enter") {
    checkButton.click();
  };
});