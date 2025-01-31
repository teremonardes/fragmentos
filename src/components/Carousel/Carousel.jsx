import Carousel from 'react-bootstrap/Carousel'
import carouselData from '../../data/CarouselData'
import './Carousel.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarouselF = () => {
  const navigate = useNavigate()

  const handleSlideClick = (material) => {
    navigate(`/catalogo/${material}`)
  }

  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <Carousel.Item
          key={index}
          className='custom-slide'
          onClick={() => handleSlideClick(item.material)} // Redirige al material correspondiente
        >
          <div className='slide-content d-flex'>
            <div className='image-container'>
              <img src={item.src} alt={item.alt} className='slide-image' />
            </div>
            <div className='text-container'>
              <h3 className='lable'>{item.label}</h3>
              <p className='description'>{item.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselF
