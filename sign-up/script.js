let projectKey = "BUFFERSTAKEHOLDERINVITE2026-27";
let realPassword = "";
let lastLength = 0;

function checkCredentials(email, user, password, key) {
    if ((!email || email.length === 0 || /^\s*$/.test(email)) || (!user || user.length === 0 || /^\s*$/.test(user)) || (!password || password.length === 0 || /^\s*$/.test(password)) || (!key || key.length === 0 || /^\s*$/.test(key))) { return false; }
    return true;
}

async function signup(email, user, password, key) {
    const res = await fetch("https://api.buffer.website/sign-up", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user,
            email: email,
            password: password,
            key: key
        })
    });

    const data = await res.json();

    return data.message === "User created";
}

async function validateKey(key) {
    const res = await fetch("https://api.buffer.website/invite-keys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: key
        })
    });

    const data = await res.json();
    return data.message === "Valid invite key";
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

    document.getElementById("signupbtn").onclick = async function() {
        let email = document.getElementById("email").value;
        let user = document.getElementById("user").value;
        let key = document.getElementById("key").value;

        let check = checkCredentials(email, user, realPassword, key);

        if (!check) { alert("Please make sure all inputs are valid!"); return; }
        
        if (! (await validateKey(key))) { alert("Invalid invite key!"); return; }

        let success = signup(email, user, realPassword, key);
        if (!success) { alert("An error occurred while signing up!"); return; }
        else { alert("Signed up successfully!"); }

        //alert(`Signed up.\nEmail: ${email}\nUsername: ${user}\nPassword: ${realPassword}\nInvite key used: ${key}`);
    }
})
