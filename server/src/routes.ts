import express  from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionController();

routes.post('/classes',classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connection',connectionsController.create);
routes.get('/connection',connectionsController.index);

export default routes;

