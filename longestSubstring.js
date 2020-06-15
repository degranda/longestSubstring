function longestSubstring(str) {
    
    const objSubstring = {};

    let longest = [0,1]; 
    let startIndex = 0; 

    for(let i = 0; i < str.length; i++) {
        const item = str[i];
        if(item in objSubstring) {
            startIndex = Math.max(startIndex, objSubstring[item] + 1);
        }
        if(longest[1] - longest[0] < i + 1 - startIndex) {
            longest = [startIndex, i + 1];
        }

        objSubstring[item] = i;
    }

    return str.slice(longest[0], longest[1]);
}