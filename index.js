"use strict";

import * as tracker from "./tracker.js";
import * as torrentParser from "./torrent-parser";

const torrent = torrentParser.open("puppy.torrent");

tracker.getPeers(torrent, (peers) => {
  console.log("list of peers: ", peers);
});
