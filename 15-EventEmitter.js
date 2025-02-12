const EventEmitter = require("events");

const CustomEmitter = new EventEmitter();
// on = listen for an event
//emit will emit that event

CustomEmitter.on("response", () => {
  console.log("data reciecned");
});
//to emit
CustomEmitter.emit("response");
