import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import agent from '../agent';

class Header extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      search: '',
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ // to clear the value again for user entry
      loading: true
    },
      () => {
        agent.Blocks.searchHeight(this.state.search)
          .then(payload => {
            this.props.history.push(`/blocks/${payload.hash}`);
          })
          .then(() => this.setState({ // to clear the value again for user entry
            search: '',
            loading: false
          }))
          .catch(() => {
            this.props.history.push(`/not_found`);
            this.setState({ 
              search: '',
              loading: false
            });
          });
      }
    );      
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
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
          <form onSubmit={this.handleSubmit} >
            <label>Search: </label>
            <input type="text" placeholder=" Block Height" value={this.state.loading ? ' ...SEARCHING... ' : this.state.search} 
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
