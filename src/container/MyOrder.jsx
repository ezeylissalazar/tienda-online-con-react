import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';


const MyOrder = () => {
	const { state } = useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product[0]} key={`orderItem-${product[0].id}`} />
				))}
				<div className="order">
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;