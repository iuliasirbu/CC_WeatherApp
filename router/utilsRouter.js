const express = require("express");
const router = express.Router();
const { sendMail } = require("../utils/mailFunctions");

router.post("/send", (req, res) => {
  const { senderName, senderMail, receiverMail, messageContent } = req.body;
  if (!senderName || !senderMail || !receiverMail || !messageContent) {
    return res.status(400).send("MissingParameters");
  }

  sendMail(
    receiverMail,
    senderMail,
    `${senderMail} has sent you a message`,
    messageContent
  );
  res.send(200);
});

router.get("/", (req, res) => {
  let city = req.query.city;
  var request = require("request");
  request(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.WEATHER_API_KEY}`,
    function (error, response, body) {
      let data = JSON.parse(body);
      if (response.statusCode === 200) {
        res.send(
          `Weather in ${city}: ${data.weather[0].description}. Temperature: ${data.main.temp}C.`
        );

        // return res.json({
        //   weather: data,
        // });
      }
    }
  );
});

module.exports = router;
