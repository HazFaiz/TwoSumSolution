
export default function Home() {

  let twoSum = function(numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length -1
    //use a left and right pointer at each end of the array
    //since we know the target and that the array is sorted:
    //we can increase the left pointer if the sum of the pointers is too low
    //we can decrease the right pointer if the sum is too high

    while (leftIndex < rightIndex) {
        const sum = numbers[leftIndex] + numbers[rightIndex]
        if ( sum === target) {
            return [leftIndex +1, rightIndex +1]
            //return each index +1 because problem asks to return a 1 indexed solution
        } 

        if (sum > target) {
            rightIndex--;
            // decrease the index is the sum is too high
        } else {
            leftIndex++;
            //increase the index if the sum is too low
        }
    }

  };
  

  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));


  return (
    <>
    <div>Two Sum II</div>
    </>
  );
}

