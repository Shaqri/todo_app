// import ProjectUI from './projectUI';
import PubSub from 'pubsub-js';
import Todo from './todo';

class Project {
  constructor(name) {
    this.name = name;
  }

  static allOrSpecific(projectName) {
    if (projectName === "All To-Do's") {
      return Todo.getTodoListArr();
    }
    return Todo.getTodoListArr().filter(todo => todo.project === projectName);
  }

  static projectArr() {
    return JSON.parse(localStorage.getItem('projectarr')) || [];
  }

  static toProject(projectArray) {
    if (projectArray.length > 0) {
      return projectArray.map(project => new Project(project.name));
    }
    return projectArray;
  }

  static getProjectArr() {
    let projectArray = this.projectArr();
    projectArray = Project.toProject(projectArray);

    return projectArray;
  }

  static savedProjects() {
    if (Project.getProjectArr().length > 0) {
      Project.getProjectArr().forEach(project => {
        project.newProject();
      });
    }
  }

  saveProject() {
    const projectArray = Project.getProjectArr();
    projectArray.push(this);
    localStorage.setItem('projectarr', JSON.stringify(projectArray));
  }


  newProject() {
    const projectInfo = 'Project-info';

    PubSub.publish(projectInfo, {
      name: this.name,
    });
  }
}


export default Project;
