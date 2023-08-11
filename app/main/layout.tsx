import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const ProductLayout = (props: Props) => {
	return (
		<div className='max-w-xl  px-2 sm:px-24'>
			<Navbar />
			{props.children}
			<Footer></Footer>
		</div>
	);
};

export default ProductLayout;

