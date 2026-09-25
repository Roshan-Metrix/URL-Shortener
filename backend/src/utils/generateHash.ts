export const generateHash = (shortCodeLength:number = 7):string => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let hash = "";
    for(let i = 0; i < shortCodeLength; i++){
        hash += characters[Math.floor(Math.random() * characters.length)];
    }
    return hash;
}
