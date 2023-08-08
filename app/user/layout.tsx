import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const ProductLayout = (props: Props) => {
	return (
		<div>
			<h2>Product Layout Page.. it will show Product page</h2>
			<div>{props.children}</div>
			<div>Product paeg end :) </div>
		</div>
	);
};

export default ProductLayout;

