import React from 'react';

import './Transaction.scss';

const numFormat = n => n.toLocaleString();
const timeFormat = t => (new Date(t)).toLocaleString();

export default ({
  balance,
  // block_height  // duplicate from block
  // block_index  // duplicate from block
  double_spend,
  fee,
  hash,
  // inputs  // Too complex for now
  // lock_time, // skipping this
  // out  // too complex for now
  rbf,
  // relayed_by, // skipping this, too boring
  // result  // too complex for now
  size,
  time,
  tx_index,
  // ver // duplicate from block?
  vin_sz,
  vout_sz,
  weight
}) => (
  <div className={double_spend ? "Transaction alert" : "Transaction"}>
    <div className="borderline">Hash: <span>{hash}</span></div>
    <div className="Tx-line">Index: <span>{tx_index}</span></div>
    <div className="Tx-line">Weight: <span>{numFormat(weight)}</span></div>
    <div className="Tx-line">Size: <span>{numFormat(size)} bytes</span></div>
    <div className="Tx-line">Time: <span>{timeFormat(time*1000)}</span></div>
    <div className="Tx-line">Balance: <span>{balance/100000000} BTC</span></div>
    <div className="Tx-line">Fee: <span>{fee/100000000} BTC</span></div>
    <div className="Tx-line">Replace-By Fee: <span>{(rbf ? rbf : 0)/100000000} BTC</span></div>
    <div className="Tx-line">Inputs: <span>{numFormat(vin_sz)}</span></div>
    <div className="Tx-line">Outputs: <span>{numFormat(vout_sz)}</span></div>
  </div>
);