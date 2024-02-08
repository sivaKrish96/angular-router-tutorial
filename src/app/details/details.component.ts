import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private router: Router){}
  details: Details[] = [
    { id: 1, name: "Java" },
    { id: 2, name: "Python" },
    { id: 3, name: "React Js" },
    { id: 4, name: "Angular Js" },
    { id: 5, name: "JavaScript" }
  ]

  onNavigate(detail:Details){
    this.router.navigate(['/details', detail?.id])
  }
}

class Details {
  id!: number
  name!: string
}
