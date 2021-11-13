import React from "react";
export default function ServiceItem(props) {
  return (
    <>
      <img className="Service-Logo" src={props.serviceLogo} />
      <h3 className="Service-Item-Name">{props.serviceName}</h3>
      <p className="Service-Item-Description">{props.serviceDescription}</p>
    </>
  );
}
