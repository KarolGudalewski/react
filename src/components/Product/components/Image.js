import React from "react";
import ImageStyle from "./ImageStyle";

const Image = ({ url, description }) => <ImageStyle src={url} alt={description} />;

export default Image;
