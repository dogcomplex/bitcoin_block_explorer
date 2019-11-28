import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import agent from '../agent';
import { BLOCK_LOADED } from '../constants/actionTypes';

const mapStateToProps = ({ blocks }, { hash }) => {
  if (blocks && blocks[hash]) {
    return {
      ...blocks[hash]
    };
  } else {
    return {
      isLoaded: false
    };
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, hash) =>
    dispatch({ type: BLOCK_LOADED, payload, hash })
});

class Block extends React.Component {
  
  componentDidMount() {
    const { isLoaded, hash, onLoad } = this.props;
    if (!isLoaded) {
      
        agent.Blocks.get(hash).then(payload => onLoad(payload, hash));
    }
  }

  render() {
    const { isLoaded, prev_block, next_block } = this.props;
    if (!isLoaded)
      return '...LOADING'; // TODO
    return (
      <div>
      	<span>THIS IS A BLOCK</span>
        {prev_block ? <Link to={`/blocks/${prev_block}`}>Prev</Link> : ''}
      	{next_block ? <Link to={`/blocks/${next_block}`}>Next</Link> : ''}
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
