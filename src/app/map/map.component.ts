import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

  export class MapComponent implements OnInit {
  
    map: google.maps.Map | undefined;
    searchBox: google.maps.places.SearchBox | undefined;
  
    ngOnInit() {
      this.initMap();
    }
  
    initMap() {
      const location = new google.maps.LatLng(37.7749, -122.4194);
  
      this.map = new google.maps.Map(document.getElementById("map")as HTMLElement, {
        center: location,
        zoom: 13
      });
  
      this.searchBox = new google.maps.places.SearchBox(
        document.getElementById("search-box")as HTMLInputElement
      );
  
      this.map.addListener("bounds_changed", () => {
        //check
        this.searchBox!.setBounds(this.map!.getBounds()!);
      });
  
      this.searchBox.addListener("places_changed", () => {
        const places = this.searchBox!.getPlaces();
  
        if (places!.length == 0) {
          return;
        }
  
        const bounds = new google.maps.LatLngBounds();
  
        places!.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
  
          bounds.extend(place.geometry.location);
        });
  
        this.map!.fitBounds(bounds);
      });
    }
  
  }
  

