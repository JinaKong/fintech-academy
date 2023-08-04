var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
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

// 로그인 바디 요청
app.post("/login", function (req, res) {
  console.log(req.body.id);
  console.log(req.body.password);
  res.send("hello world");
});


// react와 겹치므로 4000으로 변경
app.listen(4000);