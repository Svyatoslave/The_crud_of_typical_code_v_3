import Router from "express";

import todosController from "./todos.controller";
import todoValidationSchema from "./todo.validationSchema";
import validationMiddlewar from "../../common/validation/validationMiddlewar";

const todosRouter = new Router();
todosRouter.post(
  `/todos`,
  validationMiddlewar(todoValidationSchema),
  todosController.create
);
todosRouter.get(`/todos`, todosController.getAll);
todosRouter.get(`/todos/:id`, todosController.getOne);
todosRouter.put(
  `/todos/:id`,
  validationMiddlewar(todoValidationSchema),
  todosController.update
);
todosRouter.delete(`/todos/:id`, todosController.delete);

export default todosRouter;
