import React from 'react'
import { Link } from 'react-router-dom'
import classes from './popularProperties.module.css'
import img1 from '../../assets/realestatebeach.jpg'
import img2 from '../../assets/realestatemountain.jpg'
import img3 from '../../assets/realestatecountryside.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'

const PopularProperties = () => {
  const [beachProperties, setBeachProperties] = useState(0)
  const [mountainProperties, setMountainProperties] = useState(0)
  const [villageProperties, setVillageProperties] = useState(0)

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')

         setBeachProperties(data.beach)
         setMountainProperties(data.mountain)
         setVillageProperties(data.village)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Différents types de propriétés</h5>
          <h2>Le meilleur type de propriétés pour vous</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=beach&continent=0&priceRange=1`} className={classes.property}>
            <img src={img1} />
            <div className={classes.quantity}>{beachProperties} properties</div>
            <h5>propriétés de chambre</h5>
          </Link>
          <Link to={`/properties?type=mountain&continent=1&priceRange=1`} className={classes.property}>
            <img src={img2} />
            <div className={classes.quantity}>{mountainProperties} properties</div>
            <h5>propriétés de Maison</h5>
          </Link>
          <Link to={`/properties?type=village&continent=2&priceRange=1`} className={classes.property}>
            <img src={img3} />
            <div className={classes.quantity}>{villageProperties} properties</div>
            <h5>Propriétés studio</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties