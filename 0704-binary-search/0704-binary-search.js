/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target, l = 0, r = nums.length-1) {
    let mid = Math.floor((l+r)/2);
 
    if (nums[mid] === target) return mid;
    else if (nums.length === 0) return NaN;
    else if (l>r) return -1;
    else if (nums[mid] > target) return search(nums, target, l, mid-1);
    else if (nums[mid] < target) return search(nums, target, mid+1, r);
};