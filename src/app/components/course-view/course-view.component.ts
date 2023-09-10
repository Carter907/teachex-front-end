import {Component, Input} from '@angular/core';
import {Course} from "../../model/course";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent {
  @Input() course: Partial<Course> = {}
}
