import React, { Component } from 'react'
import './UserOtherInfo.scss';
import PropTypes from 'prop-types';

export default class UserOtherInfo extends Component {
  render() {
    const {email, id} = this.props;
    return (
      <span className="other">
        {`email: ${email} id: ${id}`}
      </span>
    )
  }
}

UserOtherInfo.propTypes = {
  email:PropTypes.string,
  id:PropTypes.number
}