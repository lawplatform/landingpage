import Head from 'next/head'
import { Map, MapMarker } from 'react-kakao-maps-sdk';
export default function KaKaoMap() {
	return (
		<div>

			<Map
				center={{ lat: 37.65286781200174, lng: 126.77620524924484 }}
				style={{ width: "100%", height: "500px" }}
			>
				<MapMarker position={{ lat: 37.65286781200174, lng: 126.77620524924484 }}
					image={{
						src: "/icon/marker.png",
						size: {
							width: 64,
							height: 69,
						},
						options: {
							offset: {
								x: 27,
								y: 69,
							},
						},
					}}
				/>
			</Map>
		</div>
	)
}
