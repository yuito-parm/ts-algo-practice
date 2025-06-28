const nums: number[] = [1, 7, 3, 5];

const findMax = (nums: number[]):number => nums.reduce((max, curr) => max > curr ? max : curr, nums[0])

console.log(findMax(nums));