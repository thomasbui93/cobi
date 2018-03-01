import * as fs from 'fs';

export default class CobiRouter {
  static fileTypeRegex = /^.*\.(ts)$/
  private folders: Array<string>
  private routes: Array<string>
  private rootApi: string

  constructor(folders: Array<string>, rootApi?: string) {
    this.folders = folders;
    this.rootApi = rootApi;
  }

  collectRoutes(): Boolean {
    try {
      const routers = new Set();
      this.folders.map(folder => this.collectFile(folder).forEach(file => routers.add(file)));
      this.routes = Array.from(routers);
      return true;
    } catch (error) {
      return false;
    }
  }

  addRoute(folder: string): Boolean {
    try {
      const currentRoutes = new Set(this.routes);
      this.collectFile(folder).forEach(file => currentRoutes.add(file));
      this.routes = Array.from(currentRoutes);
      return true;  
    } catch (error) {
      return false;
    }
  }

  collectFile(folder: string): Array<string> {
    const routes = new Set();
    fs.readdirSync(folder)
      .filter(file => file.match(CobiRouter.fileTypeRegex))
      .forEach(file => routes.add(`${folder}/${file}`));
    return Array.from(routes);
  }
  
  removeRoute(folder: string): Boolean {
    try {
      const currentRoutes = new Set(this.routes);
      this.collectFile(folder).forEach(file => currentRoutes.delete(file));
      this.routes = Array.from(currentRoutes);
      return true;  
    } catch (error) {
      return false;
    }
  }

  getAvailableRoutes(): Array<string> {
    return this.routes;
  }

  populateRoutes(): void {

  }
}