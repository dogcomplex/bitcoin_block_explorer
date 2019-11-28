import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div>
		<span>HOME</span>
		<Link to={`/blocks/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`}>Genesis Block</Link>
		<Link to={`/blocks/latest`}>Latest Block</Link>
	</div>
);
