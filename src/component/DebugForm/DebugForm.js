import React from "react";
import { Descriptions } from "antd";
import "antd/dist/antd.css";
import "./DebugForm.css";

const DebugForm = (props) => {
  console.log(props.data);

  return (
    <div>
      <Descriptions
        bordered
        column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="ID">{props.data.id}</Descriptions.Item>
        <Descriptions.Item label="Titile">{props.data.title}</Descriptions.Item>
        <Descriptions.Item label="Sub Title">
          {props.data.subTitle}
        </Descriptions.Item>
        <Descriptions.Item label="time">{props.data.time}</Descriptions.Item>
        <Descriptions.Item label="Platform">
          {props.data.platform}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">{props.data.phone}</Descriptions.Item>
        <Descriptions.Item label="OS Version">
          {props.data.osVersion}
        </Descriptions.Item>
        <Descriptions.Item label="Reporter">
          {props.data.reporter}
        </Descriptions.Item>
        <Descriptions.Item label="App Version">
          {props.data.appVersion}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <img
            alt="example"
            src={props.data.image}
            style={({ maxWidth: "50%" }, { maxHeight: " 50% " })}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default DebugForm;
