document.addEventListener("DOMContentLoaded", function () {
    var inputText = document.getElementById("inputText");
    inputText.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });
});

function deleteInput() {
    document.getElementById("inputText").value = "";
}

function convertToUpperCase() {
    var inputText = document.getElementById("inputText").value;
    var convertedText = inputText.toUpperCase();
    document.getElementById("outputText").innerHTML = convertedText;
}

function convertToLowerCase() {
    var inputText = document.getElementById("inputText").value;
    var convertedText = inputText.toLowerCase();
    document.getElementById("outputText").innerHTML = convertedText;
}

function capitalizeFirstLetters() {
    var inputText = document.getElementById("inputText").value;
    var words = inputText.split(" ");
    var capitalizedText = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalizedText += capitalizedWord + " ";
    }
  
    document.getElementById("outputText").innerHTML = capitalizedText;
}  

function convertToCamelCase() {
    var inputText = document.getElementById("inputText").value;
    var words = inputText.split(" ");
    var camelCaseText = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (i === 0) {
            camelCaseText += word.toLowerCase();
        } else {
            camelCaseText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }

    document.getElementById("outputText").innerHTML = camelCaseText;
}

function convertToSnakeCase() {
    var inputText = document.getElementById("inputText").value;
    var snakeCaseText = inputText.toLowerCase().replace(/\s+/g, "_");

    document.getElementById("outputText").innerHTML = snakeCaseText;
}

function convertToPascalCase() {
    var inputText = document.getElementById("inputText").value;
    var words = inputText.split(" ");
    var pascalCaseText = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        pascalCaseText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    document.getElementById("outputText").innerHTML = pascalCaseText;
}

function copyToClipboard() {
    var outputText = document.getElementById("outputText").textContent;
    var textarea = document.createElement("textarea");
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Result copied to clipboard!");
}
