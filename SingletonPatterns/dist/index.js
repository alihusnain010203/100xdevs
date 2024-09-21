"use strict";
// import { GameManager } from "./store";
// import { startLogger } from "./logger";
Object.defineProperty(exports, "__esModule", { value: true });
// startLogger();
// setInterval(() => {
//     GameManager.getInstance().addGame({
//         id: Math.random().toString(),
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)
const PubSubManager_1 = require("./PubSubManager");
setInterval(() => {
    PubSubManager_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
