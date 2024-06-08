export default class ProjectService {
  async selectAll() {
    try {
      const projects = await Project.findAll();

      if (projects) {
        return { code: 200, values: projects };
      }

      return { code: 404, values: "projects_not_found" };
    } catch (error) {
      console.log(`Error selecting projects: ${error.message}`);
      return { code: 500, values: `Error selecting projects: ${error}` };
    }
  }
}
