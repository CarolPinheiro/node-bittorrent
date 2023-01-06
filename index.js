"use strict";
import fs from "fs";
import bencode from "bencode";

import dgram from "dgram";
import { Buffer } from "buffer";
import { parse as urlParse } from "url";

const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));
const url = urlParse(torrent.announce.toString("utf8"));
const socket = dgram.createSocket("udp4");
const myMsg = Buffer.from("hello?", "utf-8");

socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});

socket.on("message", (msg) => {
  console.log("message is", msg);
});
