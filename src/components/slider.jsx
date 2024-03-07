import React, { Component } from "react";
import Slider from "react-slick";
import { SliderRight } from "../assets/logo";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#4f69ff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#4f69ff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
