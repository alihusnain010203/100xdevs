// import { GameManager } from "./store";
// import { startLogger } from "./logger";

// startLogger();

// setInterval(() => {
//     GameManager.getInstance().addGame({
//         id: Math.random().toString(),
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)
import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)
