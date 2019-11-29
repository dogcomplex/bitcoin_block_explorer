import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import agent from '../agent';
import { BLOCK_LOADED } from '../constants/actionTypes';

const mapStateToProps = ({ blocks }, { page, limit }) => {

};

const mapDispatchToProps = () => {};

class BlockList extends React.Component {

	state = {

	};

	render() {
		const { page, limit } = this.props;
		return;
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);