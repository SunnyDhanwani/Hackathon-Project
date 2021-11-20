const getCordinates = () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
  const cordinates = {
    latitude: "",
    longitude: "",
  };
  function success(pos) {
    const crd = pos.coords;
    console.log(pos.coords)
    cordinates.latitude = crd.latitude;
    cordinates.longitude = crd.longitude;
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return cordinates;
};
const getAddress = () => {
    const cordinates = getCordinates()
  setTimeout(() => {
    var latitude = cordinates["latitude"];
    var longitude = cordinates["longitude"]
    console.log("latitude" , latitude)
    console.log("longiitude" , longitude)
    if(!latitude) return
    fetch(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apikey=F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ`
      )
      .then(response => response.json())
      .then(data =>{
         console.log(data.items[0].address)
        });
  }, 1000);
};
getAddress()