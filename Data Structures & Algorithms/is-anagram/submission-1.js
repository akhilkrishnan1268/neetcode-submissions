class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let tmap = {};
        let smap = {};
        for(let i =0;i<s.length;i++){
            smap[s[i]] = (smap[s[i]] ?? 0) + 1
            tmap[t[i]] = (tmap[t[i]] ?? 0) + 1
        }
        console.log(smap, tmap)
        for(const e in smap){
            if(smap[e]!== tmap[e]){
                return false;
            }
        }
        return true;
    }
}
