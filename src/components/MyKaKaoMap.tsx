import React, { useEffect } from "react";

const MyKakaoMap = () => {
	useEffect(() => {
		if (window.kakao) {
			window.kakao.maps.load(() => {
				// id가 'map'인 요소에 지도를 생성
				const mapContainer = document.getElementById("map");
				const mapOption = {
					// 해당 좌표는 서울 시청을 중심으로 함
					center: new window.kakao.maps.LatLng(37.65286781200174, 126.77620524924484),
					// 줌 레벨 3으로 설정
					level: 3,
				};
				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				var imageSrc = "/icon/marker.png",
					imageSize = new window.kakao.maps.Size(64, 69),
					imageOption = { offset: new window.kakao.maps.Point(27, 69) };

				var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
				var markerPosition = new window.kakao.maps.LatLng(37.65286781200174, 126.77620524924484);
				var marker = new window.kakao.maps.Marker({
					position: markerPosition,
					image: markerImage
				});
				marker.setMap(map);

			});
		}
	}, []);

	return (
		<div>he is my name
			<div id="map" className="w-full h-[300px]">h</div>
		</div>
	);
};

export default MyKakaoMap;
