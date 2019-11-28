import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://blockchain.info';
// local instance of https://github.com/Blockstream/esplora/blob/master/API.md

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Blocks = {
  get: (hash) =>
  	(hash === 'latest')
	  	? Blocks.latest()
	    : requests.get(`/rawblock/${hash}?cors=true`),
  latest: () =>
    requests.get(`/latestblock?cors=true`).then(payload => Blocks.get(payload.hash)),
};

export default {
  Blocks
};
