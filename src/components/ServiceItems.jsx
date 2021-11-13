import React from "react";
import phone from "../icons/phone-solid.svg";
import ServiceItem from "./ServiceItem";
export default function ServiceItems(props) {
  return (
    <>
      <ServiceItem
        serviceImage={phone}
        serviceName="IP Telephones"
        serviceDescription="Reliable and crystal clear IP phone installation"
      />
    </>
  );
}
