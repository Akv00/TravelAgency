import React, { useState, useEffect } from "react";
import styles from './styles.module.css';

function HomePage() {

return (
<div className={styles.container}>
    <div className={styles.parallax}>
        <div className={styles.parallax_content}>
        <h1>Welcome to the Travel Agency</h1>
        <p>Book Your Happy Trip. Now!!</p>
        </div>
    </div>
    <div className={styles.intro_block}>
        <div className={styles.intro_title}><h1>Welcome to 1000 Mile Travel Vacations</h1></div>
        <div className={styles.intro_body}>
          <h>For travelers who expect more, 1000 Mile Travel Vacations specialize in designing tailored vacation and travel experiences to make your travel dreams a reality.</h>
          <p>From weekend getaways to extended, family-focused itineraries and luxury escapes, when you book with 1000 Mile Travel Vacations you’ll enjoy exemplary service and value for money, delivered by the best team in travel.</p>
          <p>The 1000 Mile Travel Group is part of the global CTM Group of travel businesses. When you book your vacation through 1000 Mile Travel Vacations, you’ll enjoy the benefits of CTM’s global buying power and extensive partnerships which deliver exceptional value and access to unique travel ‘perks’ – making every holiday experience an unforgettable one.</p>
        </div>
    </div>
    <div className={styles.special}><h2>Specialised in corporate bookings and HNI(High Networth Individual Bookings)</h2> </div>
</div>
);
}

export default HomePage;
