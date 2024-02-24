import Fastify from "fastify";
import zmq from 'zeromq';

const app = Fastify();
const socket = new zmq.Publisher();
const sub = new zmq.Subscriber();

app.post("/", async (request, reply) => {
	await socket.send(["cs361.microservice", JSON.stringify({ ...request.body })]);
  console.log(request.body)
  const micro = await sub.response();
  const response = {
    title: "Response",
    content: "Api Resonded!"
  };
  return reply.send({ ...request.body });
});

const main = async () => {
  try {
    await socket.bind("tcp://*:7890");
    sub.connect("tcp://localhost:3000");
    sub.subscribe("cs361.microservice");
    await app.listen({port: 3000});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();