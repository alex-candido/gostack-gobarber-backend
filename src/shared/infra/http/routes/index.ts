import { Request, Response, Router } from 'express';

const routes = Router();

routes.use('/',(request: Request, response: Response, next) => {
  return response.json({message: 'Hello World'});
})

export default routes;
