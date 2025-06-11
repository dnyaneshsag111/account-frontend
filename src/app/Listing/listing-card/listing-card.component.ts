import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss'
})
export class ListingCardComponent {
  @Input() hotel: any

  // Array for star rating
  stars = [1, 2, 3, 4, 5]

  // Method to handle save action
  saveHotel(): void {
    console.log("Hotel saved:", this.hotel.id)
    // Implement actual save functionality here
  }
}
