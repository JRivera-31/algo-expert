// Solution #1
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
      seqI = 0
      arrI = 0
      
    while(seqI < sequence.length && arrI < array.length) {
        if(sequence[seqI] === array[arrI]) seqI++
        arrI++
    }
      
    return seqI === sequence.length
}

// Solution #2
// O(n) time | O(1) space - where n is the length of the array 
function isValidSubsequence(array, sequence) {
    seqI = 0
      
    for(let value of array) {
        if(seqI === sequence.length) break
        if(sequence[seqI] === value) seqI++
    }
      
    return seqI === sequence.length
}