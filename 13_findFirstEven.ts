const nums1: number[] = [1, 5, 7, 10, 3, 4];

const nums2: number[] = [1, 3, 5];

const findFirstEven = (nums: number[]): number | null => {
    const result = nums.find(num => num % 2 === 0);
    return result !== undefined ? result : null;
}

console.log(findFirstEven(nums1));
console.log(findFirstEven(nums2));