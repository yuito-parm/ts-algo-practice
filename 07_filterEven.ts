const nums: number[] = [1, 2, 3, 4, 5, 6];

const filterEven = (nums: number[]): number[] => nums.filter(num => num % 2 === 0);

console.log(filterEven(nums));