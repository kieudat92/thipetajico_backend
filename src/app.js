import express from 'express';
import logger from 'morgan';
import { connect } from './config/db';
import { restRouter } from './api';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from'path'

var os = require('os');
let ipLocal = ''
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      //console.log(ifname + ':' + alias, iface.address);
      ipLocal = iface.address
    } else {
      // this interface has only one ipv4 adress
      //console.log(ifname, iface.address);
      ipLocal = iface.address
    }
    ++alias;
  });
});

const app = express();
const PORT = process.env.PORT || 3001;

connect();
app.use(express.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(express.urlencoded({ extended: true }));


app.use('/api', restRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, ipLocal, () => {
  console.log('PORT: ' + ipLocal + ':' + PORT)
});
