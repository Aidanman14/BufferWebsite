let projectKey = "BUFFERSTAKEHOLDERINVITE2026-27";

function checkCredentials(email, user, password, key) {
    if ((!email || email.length === 0 || /^\s*$/.test(email)) || (!user || user.length === 0 || /^\s*$/.test(user)) || (!password || password.length === 0 || /^\s*$/.test(password)) || (!key || key.length === 0 || /^\s*$/.test(key))) { return false; }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupbtn").onclick = function() {
        let email = document.getElementById("email").value;
        let user = document.getElementById("user").value;
        let password = document.getElementById("pass").value;
        let key = document.getElementById("key").value;

        let check = checkCredentials(email, user, password, key);

        if (!check) { alert("Please make sure all inputs are valid!"); return; }
        
        if (!(key == projectKey)) { alert("Invalid invite key!"); return; }

        alert("Signed up ez noob.");
    }
})
