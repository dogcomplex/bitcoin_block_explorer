import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Block.scss';
import agent from '../agent';
import { BLOCK_LOADED } from '../constants/actionTypes';
import Transaction from './Transaction';

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
  
  state = {
    tx_page: 0,
    tx_limit: 10
  };

  constructor( props ) {
    super( props );
    this.changeTxPage = this.changeTxPage.bind(this);
  }

  componentDidMount() {
    const { isLoaded, hash, onLoad, time } = this.props;

    if (!isLoaded) {
      agent.Blocks.get(hash).then(payload => onLoad(payload, hash));
    } else {
      const ONE_HOUR = 60 * 60 * 1000; // ms
      if ((Date.now() - ONE_HOUR) < time*1000 ) {
        // re-fetch blocks that aren't an hour old yet, just in case the chain is being contested
        agent.Blocks.get(hash).then(payload => onLoad(payload, hash));
      }
    }
  }

  changeTxPage(diff) {
    const { n_tx } = this.props;
    const { tx_page, tx_limit } = this.state;
    if (tx_page + diff >= 0 && (tx_page + diff)*tx_limit < n_tx )
      this.setState(({ tx_page }) => ({ tx_page: tx_page + diff}));
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
    const {
      tx_page,
      tx_limit
    } = this.state;

    if (!isLoaded)
      return (
        <div className="Block-loading">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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
        
        
        <br/>

        <div className="link-buttons">
            {prev_block && validHash(prev_block) ? <Link to={`/blocks/${prev_block}`}>Previous Block</Link> : ''}
            {next_block && validHash(next_block[0]) ? <Link to={`/blocks/${next_block[0]}`}>Next Block</Link> : ''}
            {next_block[1] && validHash(next_block[1]) ? <Link to={`/blocks/${next_block[1]}`}>FORK</Link> : ''}
        </div>

        <br/>

        <div className="Transactions-section">
          <div>Transactions:</div> 
          <div className="pagination">
            <a onClick={() => this.changeTxPage(-1)}>{' < '}</a>
            { tx_page*tx_limit + 1 } to { Math.min((tx_page + 1) * tx_limit, n_tx) } of { n_tx }
            <a onClick={() => this.changeTxPage(+1)}>{' > '}</a>
          </div>
        </div>

        <div className="Transactions">
          {tx.slice(tx_page*tx_limit, (tx_page + 1)*tx_limit).map(t => <Transaction {...t} key={t.hash} />)}
        </div>

        <div className="borderline">Merkle Root: <span>{mrkl_root}</span></div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
