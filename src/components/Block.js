import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Block.scss';
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
  onLoad: (payload, request) =>
    dispatch({ type: BLOCK_LOADED, payload, request })
});

const validHash = (hash) => {
  if (typeof hash !== 'string') return false;
  if (hash.length !== 64) return false;
  return hash.split('0').join('') !== ''; // not an all-0 string
};

const numFormat = n => n.toLocaleString();

const timeFormat = t => (new Date(t)).toLocaleString();


class Block extends React.Component {
  
  componentDidMount() {
    const { isLoaded, hash, onLoad, time } = this.props;

    if (!isLoaded) {
      agent.Blocks.get(hash).then(payload => onLoad(payload, hash));
    } else {
      const ONE_HOUR = 60 * 60 * 1000; // ms
      if ((Date.now() - ONE_HOUR) < time*1000 ) 
        // re-fetch blocks that aren't an hour old yet, just in case the chain is being contested
        agent.Blocks.get(hash).then(payload => onLoad(payload, hash));
    }
  }

  render() {
    const { 
      isLoaded, 
      prev_block, 
      next_block, 
      block_index, 
      bits, 
      fee, 
      hash, 
      height,
      main_chain, 
      mrkl_root, 
      n_tx, 
      tx, 
      nonce, 
      size, 
      time, 
      ver, 
      weight 
    } = this.props;

    if (!isLoaded)
      return (
        <div className="Block-loading">
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      );
    return (
      <div className="Block">

      	<div className="borderline">Hash: <span>{hash}</span></div>
        <br/>

        <div className="Block-line">Height: <span>{height}</span></div>
        <div className="Block-line">Index: <span>{block_index}</span></div>

        <div className="Block-line">
          Version: <span>{ver} { !main_chain && <span> (Not Main Chain)</span> }</span>
        </div>

        
        <div className="Block-line">Timestamp: <span>{timeFormat(time*1000)}</span></div>

        <div className="Block-line">Nonce: <span>{nonce}</span></div>
        <div className="Block-line">Size: <span>{numFormat(size)} bytes</span></div>
        <div className="Block-line">Bits: <span>{numFormat(bits)}</span></div>
        <div className="Block-line">Weight: <span>{numFormat(weight)} WU</span></div>

        <div className="Block-line">Fee: <span>{fee/100000000} BTC</span></div>
        <div className="Block-line">Transaction Count: <span>{numFormat(n_tx)}</span></div>
        
        <br/>

        <div className="link-buttons">
            {prev_block && validHash(prev_block) ? <Link to={`/blocks/${prev_block}`}>Previous Block</Link> : ''}
            {next_block && validHash(next_block[0]) ? <Link to={`/blocks/${next_block[0]}`}>Next Block</Link> : ''}
            {next_block[1] && validHash(next_block[1]) ? <Link to={`/blocks/${next_block[1]}`}>FORK</Link> : ''}
        </div>

        <br/>

        <div className="borderline">Merkle Root: <span>{mrkl_root}</span></div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
