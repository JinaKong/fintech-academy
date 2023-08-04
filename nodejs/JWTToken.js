let jwt = require('jsonwebtoken');

// 금융결제원에서 받은 token으로 테스트
let privateKey = "dkfkjaewlsdklfjsajkldf";


// SHA-256 방식 (비동기)
var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";

jwt.sign(
    {
      userId: 1,
    },
    tokenKey,
    {
      expiresIn: "10d",
      issuer: "fintech.admin",
      subject: "user.login.info",
    },
    function (err, token) {
      console.log("로그인 성공", token);
      res.json(token);
    }
  );



  // 검증하는 부분 추가 
  // "wrong-secret-key"가 아니라 tokenKey를 넣으면 정상값 출력
  const token = "";
  jwt.verify( token, "wrong-secret-key", function (err, decoded){

    // "wrong-secret-key"라서 오류
    if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(decoded);
      }
  });