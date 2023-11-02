export const GEOLOCATIONOPTIONS = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
export default function geolocationSuccess(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

