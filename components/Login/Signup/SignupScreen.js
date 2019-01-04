import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../Logo';
import Wallpaper from './../Wallpaper';

export default class SignupScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
      </Wallpaper>
    );
  }
}
