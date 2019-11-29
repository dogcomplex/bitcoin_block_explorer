import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://blockchain.info';
const GENESIS_BLOCK = '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'; 
// local instance of https://github.com/Blockstream/esplora/blob/master/API.md

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Blocks = {
  get: (hash) => {
  	switch(hash) {
  		case 'latest':
  			return Blocks.latest();
  		case 'genesis':
  		case 'first':
  			return Blocks.genesis();
  		default:
  			return requests.get(`/rawblock/${hash}?cors=true`);
	  }
  },
  latest: () =>
    requests.get(`/latestblock?cors=true`).then(payload => Blocks.get(payload.hash)),
  genesis: () =>
  	Blocks.get(GENESIS_BLOCK),
};

export default {
  Blocks
};
