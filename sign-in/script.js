let realPassword = "";
let lastLength = 0;

function checkCredentials(user, password) {
    if ((!user || user.length === 0 || /^\s*$/.test(user)) ||
        (!password || password.length === 0 || /^\s*$/.test(password))) {
        return false;
    }
    return true;
}

async function signin(user, password) {
    const res = await fetch("https://api.buffer.website/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user,
            password: password
        })
    });

    const data = await res.json();
    return data;
}

document.addEventListener("DOMContentLoaded", function () {
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
    });

    document.getElementById("signinbtn").onclick = async function () {
        let useremail = document.getElementById("useremail").value;

        let check = checkCredentials(useremail, realPassword);

        if (!check) {
            alert("Please make sure all inputs are valid!");
            return;
        }

        let result = await signin(useremail, realPassword);

        if (!result || result.message !== "Signed in successfully") {
            alert(result?.message || "Login failed!");
            return;
        }

        alert(`Signed in.\nUser: ${result.user.username}`);
    };
});