import React from 'react'

const ContainerModal = ({data}) => {
  
  return (
    <>
 <div className='banner-img vh-100'  style={{ backgroundImage: `url(${data.image})` }}>
    <div className="banner-content col-lg-4 col-md-6 col-sm-12">
    <h5>{data.title.first}</h5>
    <h5>{data.title.second}</h5>
    <p>{data.content.first}</p>
    <p>{data.content.second}</p>
    <p>{data.content.third}</p>
    <button className='banner-button'>JETZT ZUM SHOP</button>
    </div>
  </div>
    </>
  )
}

export default ContainerModal