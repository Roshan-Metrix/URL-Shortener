let hash = "";

// Generate the hash
function generateHash(length = 7){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    for(i = 0; i < length; i++){
        hash += characters[Math.floor(Math.random() * characters.length)];
    }

    return hash;
}

// Display the original , short urls
function storeUrls(originalUrl){
    const hashV = generateHash();
    const result = {
        originalUrl : originalUrl,
        hashCode : hashV,
        shortUrl : `https://shorturl.com/${hashV}`
    }
    return result;
}

console.log(storeUrls("https://www.coesofjrfkjdsfs.com/cours/sdfsf/dfjsfslfhjkhkjh/gffg/?uuid=543535"))