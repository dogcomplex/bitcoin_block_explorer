import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import agent from '../agent';

class Header extends React.Component {

  state = {
    search: undefined
  }

  render() {
    const { search } = this.state;
    return (
      <div className="Header">
        <div className="link-buttons">
          <Link to="/">Home</Link>
          <Link to={`/blocks/genesis`}>Genesis Block</Link>
    	    <Link to={`/blocks/latest`}>Latest Block</Link>
        </div>
        <div>
          Search: 
          {' '}
          <input type="text" placeholder=" Block Height" value={search} 
            onKeyDown={(e) => {
            	if (e.key === 'Enter') {
                agent.Blocks.searchHeight(e.target.value)
                .then(payload => {
                  this.props.history.push(`/blocks/${payload.hash}`);
                })
                .then(() => this.setState({
                  search: ''
                }))
                .then(() => this.setState({ // to clear the value again for user entry
                  search: undefined
                }))
                .catch(() => {
                  this.props.history.push(`/not_found`);
                  this.setState({ search: '' });
                  this.setState({ search: undefined });
                })
              }
            }} 
          />
        </div>
      </div>
    );
  }

}

export default withRouter(Header);
