// visualize through trees
// 

// MEMOISATION 


// return true if any combination of the elements in the array add up to target Sum 
const canSumMemo = (targetSum, array, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < 0) return false  
    for(let num of array){
        const remainder = targetSum - num 
        memo[remainder] = canSumMemo(remainder, array, memo)
        if(memo[remainder]) return true 
    }
    return false 
}


// return an array containing any combination of the array elments that add up to the targetSum 

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    for(let num of numbers){
        const remainder = targetSum - num 
        const remainderResult = howSum(remainder, numbers, memo)
        if(remainderResult){
            
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return memo[targetSum]
}
// return an array with least number of elements that add up to the targetSum  
const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null 
    let shortestCombination = null 
    for(let num of numbers){
        const remainder = targetSum - num 
        const remainderCombination = bestSum(remainder, numbers, memo)
        if(remainderCombination !== null){
            // const combination = [...remainderCombination, num]
            memo[targetSum] = [...remainderCombination, num]
           if(shortestCombination === null || memo[targetSum].length < shortestCombination.length){
               shortestCombination = memo[targetSum]
           }
        }
    }
    return shortestCombination
}
// write a function canConstruct(target, wordBank) that accepts a target string and an array of strings
// the function should return a boolean whether or not the target can be constructed by concatenating words from the word bank 
// you may reuse elements of wordBank 

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if (target === "") return true 
    for(str of wordBank){
        if(target.startsWith(str)){
            let newTarget = target.slice(str.length )
            memo[target] = canConstruct(newTarget, wordBank, memo)
            return memo[target]
            // return canConstruct(newTarget, wordBank, memo)
        }
    }
     memo[target] = false 
    return memo[target]
}
// hello from ['he', 'll', 'o']
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee', 'eeeeeee']))
const countConstruct = (target, wordBank, memo={}) => {
    // function returns the number of ways that the target can be constructed by concatenating elemnts of the 
    // wordBank array 
    if(target in memo) return memo[target]
    if(target === '') return 1
    let count = 0 
    for(str of wordBank){
        if(target.indexOf(str) === 0){
            let suffix = target.slice(str.length)
            count +=  countConstruct(suffix, wordBank)
            // return countConstruct(suffix, wordBank, memo) + 1
        }
    }
    memo[target] = count 
    return memo[target]
}

const allConstruct = (target, wordBank, memo={}) => {
    // return a two d array of words from the wordBank which can get concatenated to equal target
    if(target in memo) return memo[target]
    if(target === '') return [[]]
    let allCombinations = [] 
    for(let str of wordBank){
        if(target.startsWith(str)){
            const suffix = target.slice(str.length)
            // const suffixWays = allConstruct(suffix, wordBank)
            memo[target] = allConstruct(suffix, wordBank, memo)
            // const targetWays = suffixWays.map(way => [str, ...way])
            const targetWays = memo[target].map(way => [str, ...way])
           
            allCombinations.push(...targetWays)
        }
        
    }
    memo[target] = allCombinations
    return allCombinations
}
// console.log(allConstruct('aaaaaaaaaaaaaaaaaa', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa']))

// const digitCombinations = (digits) => {
//     let combination = []
//     for(let i=0; i < digits.length; i++){
//         let first = digits[i]
//         let index = i + 1 
//         while(index <= digits.length){
//             let sliced = digits.slice(i, index)
//             combination.push(sliced)
//             index++
//         }
//     }
//     return combination
// }

// console.log(digitCombinations("1224"))

// TABULATION IMPLEMENTATION 
// find the nth fibanacci number O(n) time complexity O(n) space complexity
const fib = (n) => {
    let arr = new Array(n)
    arr[0] = 1
    arr[1] = 1 
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n - 1]
}
