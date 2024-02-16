const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "this is home page",
  });
});

app.get("/login", async (req, res) => {
  res.cookie("name", "sumon", { sameSite: true });
  res.json({
    message: "you are login",
  });
});

app.get("/send-money", (req, res) => {
  const isLogin = req.cookies.name;
  const number = req.query.number;
  if (isLogin) {
    res.json({
      message: `you have successfully send money to this number ${number}`,
    });
  } else {
    res.json({
      message: "your are not able transaction",
    });
  }
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
