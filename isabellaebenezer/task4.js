// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for(let num of numbers){
        if (num>largest){
            largest=num;
        }
    }
    return largest;
  }
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20
