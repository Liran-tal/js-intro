function isPasswordStrong1(password) {
    if (password.length > 7){
        return 'Strong';
    }
    return 'Weak';
}

function isPasswordStrong2(password) {
    return (password.length > 7 ? 'Strong' : 'Weak'); 
}

function isPasswordStrong3(password) {
    if ((password.length > 0) && (password.length <= 7)) {
        return 'Weak';
    }
    return 'Strong';
}

function isPasswordStrong4(password) {
    return (password.length > 7 
        ? hasUpper(password) === true ? 'Very Strong' : 'Strong'
        : 'Weak');
}

function hasUpper(str) {
    for (let i = 0; i < str.length; i++) {
        //Checks if char in index i is same as its upper case form
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            return true;
        }     
    }
    return false
}


//Very strong
console.log(isPasswordStrong4("abcDEfgh"));

//Strong
console.log(isPasswordStrong1("abcdefgh"));
console.log(isPasswordStrong2("abcdefgh"));
console.log(isPasswordStrong3("abcdefgh"));
console.log(isPasswordStrong4("abcdefgh"));

//Weak
console.log(isPasswordStrong1("abc"));
console.log(isPasswordStrong2("abc"));
console.log(isPasswordStrong3("abc"));
console.log(isPasswordStrong4("abc"));