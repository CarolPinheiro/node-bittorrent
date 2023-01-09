"use strict";

import fs from "fs";
import bencode from "bencode";

export const open = (filepath) => {
  return bencode.decode(fs.readFileSync(filepath));
};

export const size = () => {};

export const infoHash = (torrent) => {
  const info = bencode.encode(torrent.info);
  return crypto.createHash("sha1").update(info).digest();
};
