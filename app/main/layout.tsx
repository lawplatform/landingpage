import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const ProductLayout = (props: Props) => {
	return (
		<div>
			<Navbar />
			{props.children}
			<Footer></Footer>
		</div>
	);
};

export default ProductLayout;

