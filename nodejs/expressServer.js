var express = require("express");
const mysql = require("mysql2");

let crypto = require("crypto");
const secret = "abcdefg";
let jwt = require("jsonwebtoken");
const auth = require("./lib/auth"); // 미들웨어


var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0776",
  database: "fintech",
});


// respond with "hello world" when a GET request is made to the homepage
// auth 추가 (미들웨어)
app.get("/", auth, function (req, res) {
  console.log(req.decoded);
  res.send("hello world");
});

app.get("/test", function (req, res) {
  res.send("test page 입니다.");
});

app.get("/user", function (req, res) {
  console.log(req.query.test);
  res.send("hello world");
});

app.post("/user", function (req, res) {
  console.log(req.body);
  res.send("hello world");
});


app.post("/login", function (req, res) {

  // id에 맞는 jwt 토큰 생성하기
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  const sql = "SELECT * FROM user WHERE email = ?";

  connection.query(sql, [email], function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      console.error("등록되지 않은 사용자입니다.");
    } else {
      console.log(result[0].password);
      const dbPassword = result[0].password;
      const hashPassword = hash(password);
      console.log(dbPassword, password);
      if (true) {
        var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
        jwt.sign(
          {
            userId: result[0].id,
            userEmail: result[0].email,
          },
          tokenKey,
          {
            expiresIn: "10d",
            issuer: "fintech.admin",
            subject: "user.login.info",
          },
          function (err, token) {
            if (err) {
              console.error(err);
            }
            console.log("로그인 성공", token);
            res.json(token);
          }
        );
      } else {
        res.json("?");
      }
    }
  });
});

const hash = (input) => {
  return crypto.createHmac("sha256", secret).update(input).digest("hex");
};

// react와 겹치므로 4000으로 변경
app.listen(4000);