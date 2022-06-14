class MyHashMap {
    constructor () {
        this.indexArr = [];
        this.valueArr = [];
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */

    put(key, value) {
        if(this.indexArr[key] === undefined) {
            this.valueArr.push(value);
            this.indexArr[key] = this.valueArr.length - 1;
        } else {
            this.valueArr[this.indexArr[key]] = value;
        }
    }

    /** 
     * @param {number} key
     * @return {number}
     */

    get(key) {
        if(this.indexArr[key] === undefined) return -1;
        return this.valueArr[this.indexArr[key]];
    }

    /** 
     * @param {number} key
     * @return {void}
     */

    remove(key) {
        if(this.indexArr[key] !== undefined) {
            this.valueArr[this.indexArr[key]] = undefined;
            this.indexArr[key] = undefined;
        }
    }
}

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */