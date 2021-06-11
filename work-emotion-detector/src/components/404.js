import React from 'react';

const errorPage = () => {
	return (
		<div
			className="error-page"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				height: '90vh',
				width: '100%',
			}}
		>
			<h1 style={{ color: '#fdb515', fontSize: '164px', zIndex: '3' }}>404</h1>
			<p style={{ color: '#4592db', fontSize: '24px', zIndex: '3' }}>
				This Page Doesn't Exist
			</p>
		</div>
	);
};

export default errorPage;
