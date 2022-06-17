import React from "react";
import phone from "../icons/phone-solid.svg";
import door from "../icons/door-closed-solid.svg";
import ethernet from "../icons/ethernet-solid.svg";
import camera from "../icons/video-solid.svg";
import wifi from "../icons/wifi-solid.svg";
import ServiceItem from "./ServiceItem";

export default function ServiceItems(props) {
  return (
    <>
      <div className="service-content">
        <ServiceItem
          serviceLogo={ethernet}
          serviceName="Cable Installation"
          serviceDescription="Installation of high-speed indoor/outdoor rated Fiber Optic, CAT 5 and CAT 6 cables for all of your data needs."
        />
        <ServiceItem
          serviceLogo={wifi}
          serviceName="Access Point Installation"
          serviceDescription="Installation and troubleshooting of power-over-ethernet wireless access points."
        />
        <ServiceItem
          serviceLogo={camera}
          serviceName="Infrastructure Security"
          serviceDescription="Installation of certified magnetic door locks and key card readers along with high definition IP cameras for high security facilities."
        />
      </div>
      <div className="about-content">
        <ServiceItem
          serviceLogo={phone}
          serviceName="IP Telephones"
          serviceDescription="Reliable and crystal clear IP phone installation."
        />
      </div>
    </>
  );
}
