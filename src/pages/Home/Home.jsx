import CarouselF from '../../components/Carousel/Carousel'
import Card from 'react-bootstrap/Card'
import './Home.css'
import { useNavigate } from 'react-router-dom'

import loza from '../../assets/images/loza.jpg'
import metal from '../../assets/images/metales.jpg'
import vidrio from '../../assets/images/vidrio.jpg'
import { Row, Col } from 'react-bootstrap'

const materials = [
  { id: 'vidrios', title: 'Vidrios', image: vidrio },
  { id: 'metales', title: 'Metales', image: metal },
  { id: 'lozas', title: 'Lozas', image: loza },
  { id: 'otros', title: 'Otros' }
]

const Home = () => {
  const navigate = useNavigate()

  const handleSelectMaterial = (material) => {
    navigate(`/catalogo/${material}`)
  }

  return (
    <>
      <CarouselF />
      <div className='homeMission p-5'>
        <div className='homeTitle py-3 '>NUESTRA MISIÓN</div>
        <div className='homeText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta pariatur nemo? Exercitationem
          possimus tempora laudantium quisquam incidunt quaerat eos voluptatem repellat cum eius voluptatibus
          praesentium, nemo rem aperiam quasi.
        </div>
      </div>

      <div className='catalogoSection pt-5'>
        <div className='titleSection mb-2 px-3 d-flex justify-content-end'>
          MATERIALIDAD
        </div>
        <Row className='cardSection d-flex align-items-center py-4 m-0 w-100 gap-4 justify-content-center'>
          {materials.map((material) => (
            <Col key={material.id} xs={12} md={3} lg={2} className='d-flex justify-content-center px-0 mx-3'>
              <Card
                onClick={() => handleSelectMaterial(material.id)}
              >
                <div className='card-img-container w-100'>
                  <img src={material.image} alt={material.title} className='w-100 p-1' />
                </div>
                <Card.Body>
                  <Card.Title className='card-title mt-1'>{material.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

    </>
  )
}

export default Home
