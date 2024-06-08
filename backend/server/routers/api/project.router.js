import { Router } from "express";
import "dotenv/config";

import validateRequestSchema from "../../middlewares/validateRequestSchema.middleware";
import { tryCatch } from "../../middlewares/tryCatch.middleware";
import projectController from "../../controllers/project.controller";

const projectRouter = Router();

projectRouter.get(
  "/",
  validateRequestSchema,
  tryCatch(projectController.getAll.bind(projectController)),
);

export default projectRouter;
