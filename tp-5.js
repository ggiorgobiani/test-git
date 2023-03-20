function generatePassword(number=true, spacial=true){ 
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = 16
    let pass= "";

   
    if (number)
    {
        charset += "0123456789";
    } if (spacial)
    {
        charset += "$=+;.!#&-?()[]_{}§|";
    }

   for (let i = 0; i <= length; i++) 
    {
        let rdmindex = Math.floor(Math.random() * charset.length);
        pass += charset[rdmindex];
    }
    return pass

}

let pass = generatePassword();
console.log(pass);




