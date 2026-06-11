class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const fMap = {}
    for (const word of strs){
            const count = new Array(26).fill(0);
            for(const letter of word){
               const ind =  letter.charCodeAt(0) - "a".charCodeAt(0)
               count[ind]+=1;
            }
            const wkey = count;
            wkey in fMap ? fMap[wkey].push(word) :  fMap[wkey] = [word]
    }
    return Object.values(fMap)
}
}
