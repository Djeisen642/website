import express from 'express';
import cluster from 'cluster';
import forky from 'forky';
import logger from './components/logger.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World! This is ${cluster.worker.id}.`);
});

app.listen(3000, () => {
  logger.info(`${cluster.worker.id} listening on 3000`);
});

process.on('uncaughtException', (err) => {
  // log the error
  logger.error(err);
  // let's tell our master we need to be disconnected
  forky.disconnect();
  // in a worker process, this will signal the master that something is wrong
  // the master will immediately spawn a new worker
  // and the master will disconnect our server, allowing all existing traffic to end naturally
  // but not allowing this process to accept any new traffic
});
