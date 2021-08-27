//Goggle Map

function initialize() {

  /*
    녹번역 GoogleMap 지도 링크 : 
    https://www.google.co.kr/maps/place/%EB%85%B9%EB%B2%88%EC%97%AD/@37.600869,126.9346667,18z/data=!3m1!4b1!4m9!1m2!2m1!1z64W567KI7Jet!3m5!1s0x357c9819ce2ffaff:0x968d120728eca519!8m2!3d37.600869!4d126.935761!15sCgnrhbnrsojsl62SARdsb2dpY2FsX3RyYW5zaXRfc3RhdGlvbg

    3호선 녹번역 : @37.600869,126.9346667
  */
  var Y_point			= 37.600869;		// Y 좌표
  var X_point			= 126.9346667;		// X 좌표

  var zoomLevel		= 17;						// 첫 로딩시 보일 지도의 확대 레벨

  var markerTitle		= "3호선 녹번역";				// 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
  var markerMaxWidth	= 300;						// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

  // 말풍선 내용
  var contentString	= '<div id="content">' +
      '<div id="siteNotice">' +'</div>'+	
      '<div id="bodyContent">'+ 
        '<p>3호선 녹번역입니다.<br /><a href="http://media.co.kr" target="_blank">http://media.co.kr</a></p>'+	
      '</div>'+ 
    '</div>';

  var myLatlng = new google.maps.LatLng(Y_point, X_point);
  var mapOptions = {
            zoom: zoomLevel,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
                      position: myLatlng,
                      map: map,
                      title: markerTitle
  });

  var infowindow = new google.maps.InfoWindow(
                        {
                          content: contentString,
                          maxWidth: markerMaxWidth
                        }
  );

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}