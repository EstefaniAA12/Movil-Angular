import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Navaja Suiza', url: 'navaja', icon: 'cut' },
    { title: 'Genero', url: '/home', icon: 'male-female' },
    { title: 'Edad', url: '/genero', icon: 'add' },
    { title: 'Universidad', url: '/uni', icon: 'school' },
    { title: 'Clima', url: 'clima', icon: 'cloudy-night' },
    { title: 'Contratarme', url: 'contratarme', icon: 'create' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
