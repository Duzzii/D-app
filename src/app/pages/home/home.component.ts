import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data = [
    { title: 'Meal 1', description: 'Description of Meal 1', picture: 'path_to_meal1_image' },
    { title: 'Meal 2', description: 'Description of Meal 2', picture: 'path_to_meal2_image' },
    // Add more meals as needed
  ];
}
