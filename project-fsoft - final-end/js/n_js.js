
    function mymap() {
        with(google.maps) {
          ncenter = new LatLng(37.80, -122.4737976)
          new Marker({
            position: ncenter,
            animation: Animation.BOUNCE
          }).setMap(new Map(n_map, {
            center: ncenter,
            zoom: 14.2
          }))
        }
      }