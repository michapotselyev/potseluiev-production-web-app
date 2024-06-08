import projectRouter from "./api/project.router.js";

class AppRouter {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Running");
    });

    this.app.use("/api/project", projectRouter);
  }
}

export default AppRouter;
