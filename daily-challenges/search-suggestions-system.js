/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

var suggestedProducts = function(products, searchWord) {
    products.sort();

    let ans = [];
    let left = 0;
    let right = products.length - 1;

    for (let i = 0; i < searchWord.length; i++) {
        let c = searchWord.charAt(i);
        let res = [];

        while (products[left]?.charAt(i) < c) {
            left++;
        }

        while (products[right]?.charAt(i) > c) {
            right--;
        }

        for (let j = 0; j < 3 && left + j <= right; j++) {
            res.push(products[left+j]);
        }

        ans.push(res);
    }

    return ans;
}

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"));