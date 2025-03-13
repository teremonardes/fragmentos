import Carousel from 'react-bootstrap/Carousel'
import carouselData from '../../data/CarouselData'
import './Carousel.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const CarouselF = () => {
  const navigate = useNavigate()

  const handleSlideClick = (material) => {
    navigate(`/catalogo/${material}`)
  }

  return (
    <Container fluid className='p-0 m-0'>
      <Carousel className='w-100' indicators={false} interval={3000}>

        {carouselData.map((item, index) => (
          <Carousel.Item
            key={index}
            className='custom-slide w-100' onClick={() => handleSlideClick(item.material)}
          >
            <div
              className='slide-content d-flex flex-column flex-md-row align-items-center justify-content-between p-4 w-75 mx-auto'
            >
              <div className='image-container d-flex justify-content-center align-items-center'>
                <img src={item.src} alt={item.alt} className='slide-image w-100 h-auto w-md-75 w-lg-50 object-fit-contain' />
              </div>
              <div className='text-container d-flex flex-column text-center text-md-end px-3 mt-3'>
                <h3 className='lable fs-1  '>{item.label}</h3>
                <p className='description fs-6 fs-md-5'>{item.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default CarouselF
