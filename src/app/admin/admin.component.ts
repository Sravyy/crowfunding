import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }


  submitForm(name: string, founder: string, managers: string, description: string, amount: number, investingIdeas: string, rewards: string){
    var newProject: Project = new Project(name, founder, managers, description, amount, investingIdeas, rewards);
    this.projectService.addProject(newProject);
  }

}
