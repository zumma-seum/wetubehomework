import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>Home</h1>");
}
const handleAbout = (req, res) => {
    return res.send("<h1>About</h1>");
}
const handleContact = (req, res) => {
    return res.send("<h1>Contact</h1>");
}
const handleLogin = (req, res) => {
    return res.send("<h1>Login</h1>");
}
const urlLogger = (req, res, next) => {
    console.log("path: ", req.path)
    next();
};
const timeLogger = (req, res, next) => {
    const time = new Date();
    const day = ['일','월','화','수','목','금','토']
    console.log(`time: ${time.getFullYear()}년 ${time.getMonth()+1}월 ${time.getDate()}일 ${day[time.getDay()]}요일 ${time.getHours()}시 ${time.getMinutes()}분`);
    next();
};
const securityLogger = (req, res, next) => {
    const protocol = req.protocol;
    console.log("protocol: ", protocol);
    if (protocol === "https") {
        console.log("secure");
    } else {
        console.log("insecure");
    }
    next();
};
const protectorMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1> Not Allowed");
    }
    console.log("allowed, you may continue.")
    next();
};
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge");
}
app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);
app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port http:://localhost: ${PORT}`);
app.listen(PORT, handleListening);
