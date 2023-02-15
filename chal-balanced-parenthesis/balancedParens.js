// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balanced = str =>{
    let parent = true
    let count = 0

    for (i = 0; i < str.length; i++){
        if (str[i] == '('){
            count += 1
        } else count -= 1 
        if (count < 0){
            parent = false
        }
    }
    if (count != 0){
        parent = false
    }
    return parent
}

console.log(balanced(')balanced('))

console.log('================================')

const balance = str =>{
    let count = 0
    
    for(i = 0; i < str.length; i++){
        if (str[i] === '('){
           count++
    }  else if (str[i] === ')')
    count--
}
    if (count < 0){
        return false
    }
    return count === 0
}

console.log(balance("(Oh Noes!)"))