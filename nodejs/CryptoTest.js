let crypto = require("crypto");


/* 
해시 함수
*/
const secret = "abcdefg";
const hash = ((input) => {
    return crypto
    .createHmac("sha256", secret)
    .update("비밀번호1234")
    .digest("hex");  
});



/* AES 암호화
*/
const AESEncrypt = (plainTxt) => {
    const algorithm = "aes-256-cbc";
    const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
    const iv = "oNYgvfAAoAUb9mmD";
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // 암호화
    let encrypted = cipher.update(plainTxt, "utf8", "base64");
    encrypted += cipher.final("base64");

    console.log(encrypted);
};


/* AES 복호화
*/
const AESDecrypt = (plainTxt) => {
    const algorithm = "aes-256-cbc";
    const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
    const iv = "oNYgvfAAoAUb9mmD";
    const cipher = crypto.createDecipheriv(algorithm, key, iv);

    // base64, utf8 반대로!
    let decrypted = cipher.update(plainTxt, "base64", "utf8" );
    decrypted += cipher.final("utf-8");

    console.log(decrypted);
}

// 복호화 테스트
AESEncrypt("1234");
AESDecrypt("BHH3zWvc/D+AuxB1jGOZ8doMqLEcNk1KKUjYLZnZeHU=");