function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort(function(a, b){return a-b})
    return arr[0] + arr[1]
  }