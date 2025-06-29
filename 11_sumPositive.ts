const nums: number[] = [-3, 0, 4, 2, -1, 7];

const sumPositive = (nums: number[]): number => {
    let sum: number = 0;
    nums.forEach(num => {
        if (num >= 0) {
            sum += num;
        }
    })
    return sum;
}

console.log(sumPositive(nums));