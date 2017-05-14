import { renderModule, renderModuleFactory } from '@angular/platform-server';
import { client } from './app/apollo.node';

import * as fs from 'fs';
import * as path from 'path';
//const fs = require('fs');
//const path = require('path');
const templateCache = {};

export function ngExpressEngine(setupOptions) {
	return function(filePath, options, callback) {
		var promise;

		if(!templateCache[filePath]){
			let file = fs.readFileSync(filePath);
			templateCache[filePath] = file.toString();
		}
		if (setupOptions.module) {
			promise = renderModule(setupOptions.module, {
				document: templateCache[filePath],
				url: options.req.url
			});
		}
		else if (setupOptions.bootstrap) {
			promise = renderModuleFactory(setupOptions.bootstrap, {
				document: templateCache[filePath],
				url: options.req.url
			});
		}
		else {
			throw new Error('Invalid config');
		}

		promise.then(string => {
			var universalData = {
					__APOLLO_STATE__: {
						apollo: {
							data: client.store.getState().apollo.data
						}
					}
				},
				str = `window.UNIVERSAL_CACHE = ${JSON.stringify(universalData)}`;

			string = string.replace(/<\/body><\/html>$/, `<script>${str}</script></body></html>`)
			callback(null, string);
		});
	}
}