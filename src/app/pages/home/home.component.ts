import { Component } from '@angular/core';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly faRightToBracket = faRightToBracket;
}
