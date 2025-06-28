const nums: number[] = [1, 2, 3, 4, 5, 6];

const countEven = (nums: number[]): number => {
    let count: number = 0;
    nums.forEach(num => {
        if (num % 2 === 0) {
            count++;
        }
    })
    return count;
}

console.log(countEven(nums));