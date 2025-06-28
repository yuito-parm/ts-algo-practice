const nums: number[] = [4, 7, 1, 5];

const findMin = (nums: number[]): number | null => nums.length === 0 ? null : nums.reduce((min, curr) => curr < min ? curr : min, nums[0])

console.log(findMin(nums));