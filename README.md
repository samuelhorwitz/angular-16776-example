# Install and Run

1. `yarn`
2. `yarn start`
3. Visit http://localhost:3011

Then to see hacky fix work, open `app.node.module.ts`, uncomment lines 13 and 14, and restart server. https://github.com/samuelhorwitz/angular-16776-example/blob/master/src/app/app.node.module.ts#L13-L14

Or, to see how this only effects SSR mode and not in-browser mode, visit `server.ts` and on line 20, change `USE_SSR` to `false`. https://github.com/samuelhorwitz/angular-16776-example/blob/master/src/server.ts#L20
