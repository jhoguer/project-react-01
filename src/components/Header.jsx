import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <section className='Header'>
      <div className='Header-title'>
        <img className='Header-image' src='https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/999182_10201150132610537_996168302_n.jpg?_nc_cat=105&_nc_eui2=AeGcl82W-esXdk27KSTtQ7uTXNkxtViAzQ7R1JniYcG-qw4bMlZRhJ82-pcKrGPhvNXr4a-QecjYZgiwKF8D0LGNiGsdsqXU4CF0rKdMX_wXFg&_nc_ohc=OxA8xoCm7EkAX_mRIoR&_nc_ht=scontent-scl1-1.xx&oh=c83a83f4d64164d9d2f3353a05ccea3b&oe=5ED50592' alt='img-profile' />
      </div>
      {children}
    </section>
  );
}

export default Header;