const nums: number[] = [2, 3, 5, 2, 1, 2, 3];

const countValue = (nums: number[], num: number): number => nums.filter(n => n === num).length;

console.log(countValue(nums, 2));
console.log(countValue(nums, 3));