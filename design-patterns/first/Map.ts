/** 
GOAL : Limit access to Google map
*/
// const div = document.getElementById('map') as HTMLElement;
const options = {
  zoom: 1,
  center: { lat: 0, lng: 0 },
};
// Instructions to every other class on how they can be an argument to
// add marker function
export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
}
export class Map {
  private googleMap: google.maps.Map;
  constructor(div: string) {
    this.googleMap = new google.maps.Map(document.getElementById(div), options);
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
