// return true if any combination of the elements in the array add up to target Sum 
const canSumMemo = (targetSum, array, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < Math.min(...array)) return false  
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
            console.log(num, remainder)
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return memo[targetSum]
}
// return an array with least number of elements that add up to the targetSum  
const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return []
    if(targetSum < 0) return null 
    let shortestCombination = null 
    for(let num of numbers){
        const remainder = targetSum - num 
        const remainderCombination = bestSum(remainder, numbers)
        if(remainderCombination !== null){
           const combination = [...remainderCombination, num]
           if(shortestCombination === null || combination.length < shortestCombination.length){
               shortestCombination = combination
           }
        }
    }
    return shortestCombination
}
console.log(bestSum(7, [1,2,3,7]))