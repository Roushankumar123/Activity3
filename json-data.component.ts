import { Component, OnInit } from '@angular/core';
import facultyData from '/faculty.json';

interface faculty {
  id:number;
  name:string;
  email:string;
  phone:string;
  highestQualification:string;
  location:string;

}

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit {
facultyInformation:faculty[]=facultyData;
  constructor() { }

  ngOnInit(): void {
  }


}
