import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { ListingPageComponent } from '../Listing/listing-page/listing-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,ListingPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
