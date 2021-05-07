// key value pairs -- Objects in JS
// Hash function takes an input and returns a fixed number 
function hash(key, arrayLen){
    let total = 0
    for(let char of key){
        let value = char.charCodeAt(0) - 96
        total = (total + value ) % arrayLen
    }
    return total 
}

function hashUpdated(key, arrayLen){
    let total = 0
    let WEIRD_PRIME = 2

    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value ) % arrayLen
    }
    return total 
}

console.log(hashUpdated("getugebre", 10))