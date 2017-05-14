# Install and Run

* `yarn`
* `yarn start`
* Visit `http://localhost:3011`
* Then to see hacky fix work, open `app.node.module.ts`, uncomment lines 13 and 14, and restart server.
* Or, to see how this only effects SSR mode and not in-browser mode, visit `server.ts` and on line 20, change `USE_SSR` to `false`.