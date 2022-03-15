import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';
  activePageName:string='recipe';
  onChangePage=(pagename:string)=>{
    this.activePageName=pagename;
  }  
}
