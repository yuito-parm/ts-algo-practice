const nums: number[] = [1, 23, 456];

const toStringArray = (nums: number[]):  string[] => nums.map(num => num.toString());

console.log(toStringArray(nums));