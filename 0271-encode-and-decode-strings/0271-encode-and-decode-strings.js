/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    const res = strs.join('!%*')
    return res
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const words = s.split('!%*');
    return words
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */