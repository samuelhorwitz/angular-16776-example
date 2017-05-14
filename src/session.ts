import * as cookieParser from 'cookie-parser';

export const session = function(app) {
  app.use(cookieParser())
};