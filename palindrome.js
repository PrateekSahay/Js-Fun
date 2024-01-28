const isPalindrome = (testString) => {
    return testString == testString.split('').reverse().join('');
}

const isPalindrome2 = (testString) => {
    let start = 0;
    let end = testString.length - 1;
    while (start < end) {
        if (testString[start] !== testString[end])
            return false;
        else {
            start ++;
            end --;
        }
    }
    return true;
}

const isPalindrome3 = (testString) => {
    return testString == reverseString(testString);
}

const reverseString = (str) => {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}



const testString = "aba";
console.log(isPalindrome(testString));