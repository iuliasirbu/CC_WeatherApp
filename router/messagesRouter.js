const express = require("express");
const router = express.Router();
const connection = require("../db");
const mysql = require("mysql");
const { sendMail } = require("../utils/mailFunctions");

// Get messages
router.get("/", (req, res) => {
  connection.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    return res.json({
      messages: results,
    });
  });
});

// Insert a new message
router.post("/", (req, res) => {
  console.log(req.body);
  const { senderName, senderMail, receiverMail, messageContent } = req.body;

  if (!senderName || !senderMail || !receiverMail || !messageContent) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  connection.query(
    `INSERT INTO messages (senderName, senderMail, receiverMail, messageContent) VALUES (${mysql.escape(
      senderName
    )}, ${mysql.escape(senderMail)}, ${mysql.escape(
      receiverMail
    )}, ${mysql.escape(messageContent)})`,
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }

      return res.json({
        messages: results,
      });
    }
  );
});

// Delete a message
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `DELETE FROM messages WHERE entryID = ${mysql.escape(id)}`,
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }

      return res.json({
        results,
      });
    }
  );
});

router.post("/sendMail", async (req, res) => {
  const { senderName, senderMail, receiverMail, messageContent } = req.body;

  if (!senderName || !senderMail || !receiverMail || !messageContent) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }
  try {
    sendMail(
      receiverMail,
      senderMail,
      `${senderMail} has sent you a message`,
      messageContent
    );
    connection.query(
      `INSERT INTO messages (senderName, senderMail, receiverMail, messageContent) VALUES (${mysql.escape(
        senderName
      )}, ${mysql.escape(senderMail)}, ${mysql.escape(
        receiverMail
      )}, ${mysql.escape(location)}, ${mysql.escape(messageContent)}.")`,
      (err, results) => {
        if (err) {
          console.log(err);
          return res.send(err);
        }

        return res.json({
          text,
        });
      }
    );
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;
