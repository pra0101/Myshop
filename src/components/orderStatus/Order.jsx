import React from 'react';
import { formatTelephoneNumber, getShippingDateRange, getFormattedDate } from '../../utils/Utils.js';
import ShippingInfo from '../common/ShippingInfo.jsx';

export default function Order (props){

  function redirectToDetailsPage (id) {
   window.location.hash = "#/orderdetails/"+id;
  }

  const { data } = props;

  return (
      <div className="order card">
        <img 
          src={data.items[0].image}
          onClick={()=>redirectToDetailsPage(data.id)}
          className="order-image" alt="Order image" />
        <div className="info">
          
          <ShippingInfo orderDetails={data} showLabel={false} />

          <div className="product-info">
            {data.status == "ordered" && <span className="ship-info faded-text">
              Expected to Ship: {getShippingDateRange(data.items[0].newEstimatedShipDateRange)}
            </span>}
            {data.status == "shipped" && <span className="ship-info faded-text">
              Expected to Deliver: {getFormattedDate(data.shipments[0].estimatedDeliveryDate)}
            </span>}
            <br/>
            <span className="product-name">
              {data.items[0].name}
            </span>
            <br />
            <span className="product-details faded-text">
              {data.items[0].skuAttributes.color} {data.items[0].skuAttributes.size}
              <br />
              {formatTelephoneNumber(data.items[0].telephoneNumber)}
              <br />
              {data.items[0].plan}
            </span>
          </div>
        </div>
      </div>
  );
}