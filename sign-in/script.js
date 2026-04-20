let realPassword = "";
let lastLength = 0;

function checkCredentials(user, password) {
    if ((!user || user.length === 0 || /^\s*$/.test(user)) || (!password || password.length === 0 || /^\s*$/.test(password))) { return false; }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pass").addEventListener("input", function () {
        let current = this.value;
        let length = current.length;

        if (length > lastLength) {
            realPassword += current.slice(lastLength);
        } 
        else if (length < lastLength) {
            realPassword = realPassword.slice(0, length);
        }

        lastLength = length;
        
        let censored = "";
        for (let i = 0; i < length; i++) {
            censored = censored + "•";
        }

        if (this.value !== censored) {
            this.value = censored;
        }
    })

    document.getElementById("signinbtn").onclick = function() {
        let useremail = document.getElementById("useremail").value;

        let check = checkCredentials(useremail, realPassword);

        if (!check) { alert("Please make sure all inputs are valid!"); return; }
        
        alert(`Signed in.\nEmail: ${useremail}\nUsername: ${user}\nPassword: ${realPassword}`);
    }
})
