import React from 'react';

export default function ShippingInfo (props) {
  const { orderDetails, showLabel } = props;
  const statusOrdered = orderDetails.status == "ordered";
  const statusShipped = orderDetails.status == "shipped";

  return (
    <div className="shipping-info">
      <div className={`ordered ${(statusOrdered || statusShipped)? "active": ""}`} >
        <img src="/graphics/Ordered.png"
          className="ordered-image" />
        <hr/>
        {showLabel && <span className="faded-text">Ordered</span>}
      </div>
      <div className={`shipped ${statusShipped ? "active": ""}`} >
        <img src="/graphics/Shipped.png"
          className="shipped-image" />
        <hr />
        {showLabel && <span className="faded-text">Shipped</span>}
      </div>
      <div className={`delivered ${orderDetails.status == "delivered"? "active": ""}`} >
        <img src="/graphics/Delivered.png"
          className="delivered-image" />
        <hr />
        {showLabel && <span className="faded-text">Delivered</span>}
      </div>
    </div>  
  );
}