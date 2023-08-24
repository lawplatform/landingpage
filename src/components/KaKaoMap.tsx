import Head from 'next/head'
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
const baseURL = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6446daaa47bec9c457b2b6d23558b3cc&autoload=false"
export default function KaKaoMap() {
	return (
		<div>

			<Script src={baseURL} strategy="beforeInteractive" />
			<Map
				center={{ lat: 37.65286781200174, lng: 126.77620524924484 }}
				style={{ width: "100%", height: "500px" }}
			>
				<MapMarker position={{ lat: 37.65286781200174, lng: 126.77620524924484 }}>

				</MapMarker>
			</Map>
		</div>
	)
}
