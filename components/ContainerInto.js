import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
const ContainerInto = ({data}) => {
  
  return (
    <div className='intro-img'  style={{ backgroundImage: `url(${data.image})` }}>
    <div className="intro-content">
    <h1 className="mt-1 fw-bold">{data.title.second}</h1>

    <h5 className="mt-1  text-danger">Direkt ab Werk</h5>
    <h5 className="mt-2 text-light">{data.content.first}</h5>
    <Link href={`${data.href}`} > 
    <button className="intro-button">HIER GEHT'S WEITTER</button>
    </Link>
    </div>
  </div>
  );
};

export default ContainerInto;
