import { Express } from "express";

import peopleController from "./people";
import cmsController from "./cms";

export default (app: Express) => {
  app.use("/v1/api/people", peopleController);
  app.use("/v1/api/cms", cmsController);
};