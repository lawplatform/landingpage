import { supabase } from "@/src/util/supabase";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
interface AskItem {
	id: number;
	created_at: string;
	name: string;
	phone: string;
	email: string;
	title: string;
	text: string;
	// Add other properties here
}



async function Home() {
	const { data: ask } = await supabase
		.from('ask')
		.select('*');
	if (!ask || ask.length === 0) {
		return <p>No data</p>;
	}

	return (
		<div>this is new data table row
			{
				ask.map((ask) => (
					<p key={ask.id}>
						<Link href={`/static/${ask.id}`}>{ask.title}</Link>
					</p>

				))
			}
		</div>
	)
}

export default Home;
