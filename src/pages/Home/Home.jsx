import CarouselF from '../../components/Carousel/Carousel'
import Card from 'react-bootstrap/Card'
import './Home.css'
import { useNavigate } from 'react-router-dom'

import loza from '../../assets/images/loza.jpg'
import metal from '../../assets/images/metales.jpg'
import vidrio from '../../assets/images/vidrio.jpg'

const materials = [
  { id: 'vidrios', title: 'Vidrios', image: vidrio },
  { id: 'metales', title: 'Metales', image: metal },
  { id: 'lozas', title: 'Lozas', image: loza }
]

const Home = () => {
  const navigate = useNavigate()

  const handleSelectMaterial = (material) => {
    navigate(`/catalogo/${material}`)
  }

  return (
    <>
      <CarouselF />
      <div className='homeMission'>
        <div className='homeTitle'>NUESTRA MISIÓN</div>
        <div className='homeText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta pariatur nemo? Exercitationem
          possimus tempora laudantium quisquam incidunt quaerat eos voluptatem repellat cum eius voluptatibus
          praesentium, nemo rem aperiam quasi.
        </div>
      </div>

      <div className='catalogoSection'>
        <div className='titleSection'>MATERIALIDAD</div>
        <div className='cardSection'>
          {materials.map((material) => (
            <Card
              key={material.id}
              className={`${material.id}Card card`}
              onClick={() => handleSelectMaterial(material.id)}
            >
              <div className='card-img-container'>
                <img src={material.image} alt={material.title} />
              </div>
              <Card.Body>
                <Card.Title className='card-title'>{material.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
