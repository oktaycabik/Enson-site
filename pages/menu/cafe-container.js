import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContentCafeContaineir from '../../components/MenuComponents/MenuContentCafeContaineir'
import MenuContact from '../../components/MenuComponents/MenuContact'
const Cafecontainer = () => {
  const {cafecontainer} = MenuBannersData
  const {cafecontainerContent} = MenuContentData

  return (
    <div>
      <MenuBanner data={cafecontainer}></MenuBanner>
   <MenuContentCafeContaineir data={cafecontainerContent}></MenuContentCafeContaineir>
   <MenuContact data={"Fordern Sie jetztIhren Café-Container an!"}></MenuContact>
    </div>
  )
}

export default Cafecontainer