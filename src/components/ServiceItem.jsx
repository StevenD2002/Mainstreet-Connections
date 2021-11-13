import React from "react";
export default function ServiceItem(props) {
  return (
    <>
      <div className="service-item">
        <img className="Service-Item-Logo" src={props.serviceLogo} />
        <h3 className="Service-Item-Name">{props.serviceName}</h3>
        <p className="Service-Item-Description">{props.serviceDescription}</p>
      </div>
    </>
  );
}
