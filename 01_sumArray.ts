const nums: number[] = [1, 3, 5, 7];

const sumArray = (nums: number[]): number => {
    let sum: number = 0;
    nums.forEach(num => {
        sum += num;
    })
    return sum;
}

console.log(sumArray(nums));