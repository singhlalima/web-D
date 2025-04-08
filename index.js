import rw from "./filesync.js";
import asyncRW from "./fileasync.js";
// console.log(rw);
// rw.syncwriter();
// rw.syncreader();
asyncRW.asyncwriter();
const data = await asyncRW.asyncreader();
console.log(data);