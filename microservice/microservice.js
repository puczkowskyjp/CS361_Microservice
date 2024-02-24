import zmq from 'zeromq';

const sock = new zmq.Subscriber();

const main = async () => {
  console.log('running main')
  try {
    sock.connect("tcp://localhost:7890");
    sock.subscribe("cs361.microservice");
    for await (const [topic, msg] of sock) {
      console.log("Received message from " + topic + " channel and this is the content:");
      console.log(JSON.parse(msg));
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();