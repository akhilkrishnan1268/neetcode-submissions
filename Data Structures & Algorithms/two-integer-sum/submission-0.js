class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const tmap = {}
        for(let i = 0 ; i< nums.length; i++){
            if((target - nums[i]) in tmap){
                return [tmap[target - nums[i]] , i]
            }
            tmap[nums[i]] = i;
        }
    }
}
