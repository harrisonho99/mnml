import { Component } from 'react';
import TopAlert from './libs/TopAlert';
import './style_component/home.css';
export default class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <TopAlert content='FREE SHIPPING ON ALL ORDERS OVER' emphasized='50$' />
      </div>
    );
  }
}
