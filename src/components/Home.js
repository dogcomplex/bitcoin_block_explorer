import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div>
		<span>HOME</span>
		<Link to={`/blocks/genesis`}>Genesis Block</Link>
		<Link to={`/blocks/latest`}>Latest Block</Link>
	</div>
);
