/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let right = 0; //2
  let maxCharCount = 0;
  const visited = {};//window

//     while(right < s.length){
//     const char = s[right];
//     visited[char] = visited[char] ? visited[char] + 1 : 1;
//     if(visited[s[right]] > maxCharCount) maxCharCount = visited[s[right]]
//     if(right - left + 1 - maxCharCount > k){
//             visited[s[left]]--
//             left++
//         }
//         right++
//     }
//     return right - left
    while(right < s.length){
        char = s[right]
        visited[char] ? visited[char]++ : visited[char] =1;
        maxCharCount = Math.max(visited[char],maxCharCount);
        if(right - left + 1 - maxCharCount > k){
            visited[s[left]]--
            left++
        }
        right++
    }
    return right - left
  }