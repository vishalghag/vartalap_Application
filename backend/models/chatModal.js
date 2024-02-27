// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

const mongoose = require("mongoose");

const chatModal =
  ({
    chatName: {
      type: String,
      trim: true,
    },

    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timesStamps: true,
  });

const Chat = mongoose.model("Chat", chatModal);

module.exports = Chat;
