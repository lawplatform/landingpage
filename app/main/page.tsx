'use client';
import { scrollPercent } from '@/src/util/scrollPercent';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import ReactAnime from 'react-animejs'
const { Anime, stagger } = ReactAnime
export default function Home() {


	return (
		<>
			<Anime
				initial={[
					{
						targets: "#Box",
						translateX: 50,
						easing: "linear"
					}
				]}
			>
				<div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
				<div id="Box" className="w-10 bg-red-100">hello</div>


				<div className="hero min-h-screen">visioin</div>
				<div className="hero min-h-screen">metaverse</div>
				<div className="hero min-h-screen">advertise</div>
			</Anime>
		</>
	)
}
