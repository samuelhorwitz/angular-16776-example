import 'reflect-metadata';
import 'zone.js/dist/zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from './app/app.browser.module';
window['Buffer'] = require('buffer/').Buffer;
platformBrowserDynamic().bootstrapModule(AppBrowserModule);
