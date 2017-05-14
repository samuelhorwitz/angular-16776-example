import { setIsNode } from './isNode';
setIsNode();

import 'reflect-metadata';
import 'zone.js/dist/zone-node.js';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.node.module';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';
import { session } from './session';
import { ngExpressEngine } from './express-engine';

enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const USE_SSR = true; // TODO this toggle should go somewhere else

if (USE_SSR) {
    app.engine('.html', ngExpressEngine({
        module: AppServerModule
    }));
}
else {
    app.engine('html', require('ejs').renderFile)
}

app.set('views', __dirname);
app.set('view engine', 'html');

// Sessions
session(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.use(morgan('dev'));

app.use(express.static(path.join(ROOT, 'dist/client'), {index: false}));
app.use(express.static(path.join(ROOT, 'public'), {index: false}));
app.get('/favicon.ico', (req, res) => {
    res.sendStatus(200);
});
app.get('/*', (req, res) => {
    res.render('index', {
        req,
        res,
        preboot: true,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3011'
    });
});

// Server
app.listen(3011, () => {
  console.log('Ready');
});
