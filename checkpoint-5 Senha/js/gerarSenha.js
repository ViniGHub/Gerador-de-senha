const btnSenha = document.querySelector('#btnSenha');

btnSenha.addEventListener("click", function () {
    let carac = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&','*']
    let passwordLength = 20;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = (Math.floor(Math.random()*100));
        if (randomNumber >= carac.length) {
            randomNumber = randomNumber - carac.length;
        }
        password += carac[randomNumber];
    }

    console.log(password);
    document.querySelector('#senha').textContent = password

})