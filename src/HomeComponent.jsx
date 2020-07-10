import React from "react";
import "./Home.css";

const HomeComponent = () => {
  const arr = [
    {
      heading: "Tasty Coffee",
      details: "Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work."
    },
    {
      heading: "Fast Cooking",
      details: "Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work."
    },
    {
      heading: "Free Delivery",
      details: "Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work."
    },
  ];
  return arr.map(data => (
<>
    <h2>{data.heading}</h2>
    <p>{data.details}</p>
    </>
  ));
}
export default HomeComponent

