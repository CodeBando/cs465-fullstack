import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {
  trip: Trip;

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // Retrieve the trip information
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Trip code not found.");
      this.router.navigate(['']); // Navigate back to home if trip code is not found
      return;
    }
    
    this.tripService.getTrip(tripCode)
      .then(data => {
        this.trip = data;
      })
      .catch(error => {
        console.error('Error fetching trip:', error);
        alert('Error fetching trip: ' + error.message);
      });
  }

  onDelete() {
    if (!confirm("Are you sure you want to delete this trip?")) {
      return;
    }

    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Trip code not found.");
      this.router.navigate(['listtrips']); // Navigate back to home if trip code is not found
      return;
    }

    this.tripService.deleteTrip(tripCode)
      .then(() => {
        alert('Trip deleted successfully.');
        this.router.navigate(['listtrips']); // Navigate back to home after deletion
      })
      .catch(error => {
        console.error('Error deleting trip:', error);
        alert('Error deleting trip: ' + error.message);
      });
  }
}