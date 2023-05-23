import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +212610130932</span>
          <span>Gmail: yassineboua97@gmail.com</span>
          <span>GitHub: boua97</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Errachidia</span>
          <span>Country: Tinejdad</span>
          <span>Current Location: Tinghir</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer