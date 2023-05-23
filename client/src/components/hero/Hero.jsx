import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("beach")
  const [continent, setContinent] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()

  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Laisse-moi trouver ton endroit de rêve maintenant</h2>
        <h5>Rechercher la meilleure sélection de biens immobiliers dans la regions Errachidia</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value='chomber'>chomber</option>
            <option value='Maison'>Maison</option>
            <option value='studio'>studio</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Prix</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Errachidia</option>
            <option value="1">Tinejdad</option>
            <option value="2">Goulmima</option>
            <option value="3">Arfoud</option>
            <option value="4">Risani</option>
            <option value="5">Rich</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero