if (Meteor.isClient) {

  Meteor.startup(function() {
    console.log("startup worked");
    Geolocation.error();
  });


  Template.userProfile.helpers({
    foo: function () {
      console.log("onCreated working");
      var latLng = Geolocation.latLng();
      console.log(latLng);
      setTimeout(function () {
        var map = L.map('map').setView([latLng.lat, latLng.lng], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'nathanielgreen.o2pefhj4',
            accessToken: 'pk.eyJ1IjoibmF0aGFuaWVsZ3JlZW4iLCJhIjoiY2lna3dmaXBvMDA3bHdlbTQ4bW05aHQ2ciJ9.PYKrjx24Ye5akPcNdbrwVw'
        }).addTo(map);
        var marker = L.marker([latLng.lat, latLng.lng]).addTo(map);
      }, 1000);
    },

    bar: function () {
    }
  });

} // End of Meteor.isClient

