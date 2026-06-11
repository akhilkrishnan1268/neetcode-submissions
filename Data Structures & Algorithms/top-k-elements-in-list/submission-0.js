class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topStack = Array.from({ length: nums.length + 1 }, () => []);
        const result = [];
        const hasMap = {};
        const largest = 0;
        const arr = [];
        for (const n of nums){
            hasMap[n] = (hasMap[n] ?? 0) +1;
        }
        for (const k in hasMap){
            topStack[hasMap[k]].push(k)
        }
        for (let i = topStack.length -1 ; i > 0; i-- ){
            result.push(...topStack[i]);
            if(result.length === k){
                return result
            }
        }
    }
}
