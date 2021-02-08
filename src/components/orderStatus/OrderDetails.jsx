import React, { useState, useEffect } from 'react';
import { getShippingDateRange, maskNumber, getFormattedDate } from '../../utils/Utils.js';
import ShippingInfo from '../common/ShippingInfo.jsx';

export default function OrderDetails(props) {

  const {orderId} = props.match.params;
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    getOrders();
  },[orderId]);


  function getOrders(){
    fetch("/mockdata/orderDetails"+orderId+".json")
      .then(response => response.json())
      .then(data => setOrderDetails(data));
  }


  if(!orderDetails) return "";

  const statusOrdered = orderDetails.status == "ordered";
  const isConfirmationRequired = statusOrdered && !orderDetails.items[0].userAcceptedDelay;
  const statusShipped = orderDetails.status == "shipped";

  return (
    <div className="card container order-details">

      {isConfirmationRequired && <div className="heads-up notification">
        <h5>Heads up: The shipping date chaged.</h5>
        <span className="faded-text">Before we can complete your order, review the newdate to confirm if you're OK with it.</span>
      </div>}

      {(statusShipped || !isConfirmationRequired) && <div className="success notification">
        <h5>Get Excited</h5>
        <span className="faded-text">Fun stuff is headed your way.</span>
      </div>}

      <ShippingInfo orderDetails={orderDetails} showLabel={true} />

      <h4>Items {statusOrdered && 'ordered'}{statusShipped && 'shipped'}: {orderDetails.shipments[0].items.length}</h4>
    
      {isConfirmationRequired && 
        <div className="alert">
          <div className="alert-text faded-text">
            <img src="/graphics/alert.svg" />
            Don't forget to let us know if you accept the new ship date. We'll cancel your order if we don't hear from you soon.
          </div>
        </div>
      }

      {isConfirmationRequired && 
        <div className="shipping-dates">
          <h4>New estimated ship date:</h4>
          <span className="faded-text">{getShippingDateRange(orderDetails.items[0].newEstimatedShipDateRange,true)}</span>
          <div className="original-shipment">
            <span className="faded-text">Original estimated ship date:</span> <br />
            <span className="faded-text">{getShippingDateRange(orderDetails.items[0].estimatedShipDateRange,true)}</span>
          </div>
        </div>
      }

      {statusShipped && 
        <div className="carrier-info">
          <h4>{orderDetails.shipments[0].carrier} tracking</h4>
          <a href={orderDetails.shipments[0].trackingUrl} target="_blank" >{maskNumber(orderDetails.shipments[0].trackingNumber)}</a>
        </div>
      }
      
      {statusShipped && 
        <div className="delivery-info">
          <h4 className="d-inline-block">Estimated delivery date:</h4>
          <span className='faded-text'>{getFormattedDate(orderDetails.shipments[0].estimatedDeliveryDate)}</span>
          
        </div>
      }

      <div className="address-info">
        <h4 className="d-inline-block">Address:</h4>
        <div className="faded-text d-inline-block">
          {`${orderDetails.shipingAddress.street} ${orderDetails.shipingAddress.city}, ${orderDetails.shipingAddress.state} ${orderDetails.shipingAddress.zip}`}
        </div>
      </div>

      {isConfirmationRequired && 
        <div className="action-buttons">
          <button className="btn btn-md btn-primary">Accept new ship date</button>
          <button className="btn btn-md btn-custom">Cancel your order</button>
        </div>
      }

      {orderDetails.items.map((item) =>
        <div className="items-info order">
          <img 
            src={item.image}
            className="order-image" alt="Order image" />
          <div className="info">
            <h3>{item.name} - {item.skuAttributes.size}<br/>{item.skuAttributes.color}</h3>
            <span className="faded-text">Quantity: {item.quantity}</span> <br />
            <span className="faded-text d-block mt-2">{item.telephoneNumber}</span>
          </div>
      </div>)}

    </div>      
  );
}