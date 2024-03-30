import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='footer__br'/>
      <div className='footer__wrapper'>
      <div className='footer__block'>
        <h5 className='footer__title'>
        INFORMATION
        </h5>
        <p className='footer__text'>
          Manufactures
        </p>
        <p className='footer__text'>
          Reviews
        </p>
      </div>
      <div className='footer__title'>
      <h5 className='footer__title'>
      SETTINGS
        </h5>
       <p className='footer__text'>
          Terms of agreement
        </p>
        <p className='footer__text'>
          Notifications
        </p>
      </div>
      <div className='footer__title'>
      <h5 className='footer__title'>
      SOCIAL MEDIA
        </h5>
        <div className='footer__links'>
        <button>
        <i class="fa-brands fa-facebook"></i>
        </button>
        <button>
        <i class="fa-brands fa-instagram"></i>
        </button>
        <button>
        <i class="fa-brands fa-twitter"></i>
        </button>
        <button>
        <i class="fa-brands fa-tiktok"></i>
        </button>
        </div>
      </div>
      <div className='footer__title'>
      <h5 className='footer__title'>
      TEXT US
        </h5> 
        <p className='footer__text'>
          mono_store@gmail.com
        </p>
        <p className='footer__text'>
          +9996507988958
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer