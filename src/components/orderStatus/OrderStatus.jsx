import React, { Component } from 'react';
import Order from './Order.jsx'

export default class OrderStatus extends Component{

  constructor(props){
    super(props);
    this.state={
      Orders: []
    }
  };

  getOrders = () => {
    fetch("/mockdata/order.json")
    .then(response => response.json())
    .then(data => this.setState({Orders: data}));
  };

  componentDidMount(){
    this.getOrders();
  }

  
  render(){
    const { Orders } = this.state;
    return (
      <div className="card container">
        <h3>Your Orders</h3>
        <div className="card-body">
          {Orders.map((order)=>
            <Order data={order} key={order.id} />
          )}  
        </div>
      </div>      
    );
  }
  
}