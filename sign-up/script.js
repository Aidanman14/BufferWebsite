let projectKey = "BUFFERSTAKEHOLDERINVITE2026-27";
let password = "";

// vatsal's key: 6ac7f00933165014d1db908e1181ffa75bc7298e8143aa61062b0a08ac6366c0
// daniel's key: bd3dae5fb91f88a4f0978222dfd58f59a124257cb081486387cbae9df11fb879
// mama's key: ccb711f092ac8ef1805b5045fab7e8a6189cb97ad04565e21b5fbcfc9e542e42
// tahmasbi's key: 6e3da5b1aace18618f33ada2fbcf5304c7d773bb7906b17d5331286a198e2473

function checkCredentials(email, user, password, key) {
    if ((!email || email.length === 0 || /^\s*$/.test(email)) || (!user || user.length === 0 || /^\s*$/.test(user)) || (!password || password.length === 0 || /^\s*$/.test(password)) || (!key || key.length === 0 || /^\s*$/.test(key))) { return false; }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pass").onkeyup = function() {
        password = this.value;
        let length = password.length;
        let censored = "";

        for (let i = 0; i < length; i++) {
            censored = censored + "•";
        }

        if (this.value !== censored) {
                this.value = censored;
        }
    }

    document.getElementById("signupbtn").onclick = function() {
        let email = document.getElementById("email").value;
        let user = document.getElementById("user").value;
        let key = document.getElementById("key").value;

        let check = checkCredentials(email, user, password, key);

        if (!check) { alert("Please make sure all inputs are valid!"); return; }
        
        if (!(key == projectKey)) { alert("Invalid invite key!"); return; }

        alert(`Signed up.\nEmail:${email}\nUsername:${user}\nPassword:${password}\nInvite key used:${key}`);
    }
})
