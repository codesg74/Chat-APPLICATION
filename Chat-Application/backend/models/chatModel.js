// const mongoose = require('mongoose');

// const chatModel = mongoose.Schema(
//     {
//         chatName: { type: String, trim: true},
//         isGroupChat: { type: Boolean, default: false},
//         users: [{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//         },
//     ],
//     latestMessege:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Messege"
//     },
//     groupAdmin: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
//   },
//   {
//     timestamps: true,
//   }

// );

// const Chat = mongoose.model("Chat", chatModel);
// module.exports = Chat;

const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMessage: { // Corrected the typo here
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
