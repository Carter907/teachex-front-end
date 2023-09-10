import { Component } from '@angular/core';
import {faArrowLeft, faBackward, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  protected readonly faArrowLeft = faArrowLeft;
}
