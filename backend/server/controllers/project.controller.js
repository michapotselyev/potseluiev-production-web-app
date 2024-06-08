import "dotenv/config";

import ProjectService from "../services/project.service.js";

export class ProjectController {
  constructor() {
    this.service = new ProjectService();
  }

  async getAll(req, res) {
    const result = await this.service.selectAll();

    return { code: result.code, values: result.values };
  }
}

const projectController = new ProjectController();

export default projectController;
