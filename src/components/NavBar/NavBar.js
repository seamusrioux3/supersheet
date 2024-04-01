import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

export default class NavBar extends React.Component {
   state = {
      selectedPage: ''
   }

   handlePageChange = () => {
      this.props.
   }

   render() {
      return (
         <ul>
            <li><a href="#inventory" id='inventory' onClick={this.handlePageChange}>Inventory</a></li>
            <li><a href="#builds"  id='builds' onClick={this.handlePageChange} > Builds</a></li>
            <li><a href="#purchases" id='purchases' onClick={this.handlePageChange}>Purchases</a></li>
            <li><a href="#sales" id='sales' onClick={this.handlePageChange} >Sales</a></li>
         </ul>
      )
   }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};
