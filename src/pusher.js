import Pusher from "pusher-js";
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

const pusher = new Pusher("ddc9f89b0b772e4dc04f", {
  cluster: 'ap1',
  enabledTransports: ['ws'],
  forceTLS: true
});

export default pusher;