import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Course} from "../../model/course";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss']
})
export class CourseCatalogComponent implements OnInit {

  courses: Course[] = []

  constructor(private client: HttpClient) {
    client.get<Course[]>("http://localhost:8080/api/courses/all").subscribe(data => {
      this.courses = data;

    })
  }


  protected readonly faSearch = faSearch;

  ngOnInit(): void {

  }
}
