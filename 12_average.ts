const nums: number[] = [1, 2, 3, 4, 5];

const average = (nums: number[]): number | null => nums.length === 0 ? null : nums.reduce((sum, curr) => sum + curr, 0) / nums.length;

console.log(average(nums));