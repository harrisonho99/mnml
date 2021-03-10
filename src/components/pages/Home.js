import { Component } from 'react';
import './pagestyle/home.css';
import Carousel from '../libs/utils/Carousel';
export default class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <Carousel auto={true} speed={2000} />
      </div>
    );
  }
}
