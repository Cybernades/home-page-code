function validateForm() {
    
    let name = document.forms["DemoForm"]["full-name"];
    let message = document.forms["DemoForm"]["message"];

    if (name.value.split(" ").length < 2 || name.value.split(" ")[1].trim().length === 0) {
        alert("Please enter your full name!");
        name.focus();
        return false;
    }

    if (message.value.length < 8) {
        alert("Message too short!");
        message.focus();
        return false;
    }

    if (message.value.split(" ")[0].length > 20) {
        alert("Invalid message!");
        message.focus();
        return false;
    }

    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    if (message.value.match(urlRegex)) {
        alert("Please do not include links!");
        message.focus();
        return false;
    }

    return true;
  }