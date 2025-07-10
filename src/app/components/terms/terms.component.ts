import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']   
})
export class TermsAndConditionsComponent {}
