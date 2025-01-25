import CarouselF from '../../components/Carousel/Carousel'
import Card from 'react-bootstrap/Card'
import './Home.css'

import loza from '../../assets/images/loza.jpg'
import metal from '../../assets/images/metales.jpg'
import vidrio from '../../assets/images/vidrio.jpg'
const Home = () => {
  return (
    <>
      <CarouselF />
      <div className='homeMission'>
        <div className='homeTitle'>NUESTRA MISIÓN</div>
        <div className='homeText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta pariatur nemo?
          Exercitationem possimus tempora laudantium quisquam incidunt quaerat eos voluptatem repellat cum eius
          voluptatibus praesentium, nemo rem aperiam quasi.
        </div>
      </div>

      <div className='catalogoSection'>
        <div className='titleSection'>MATERIALIDAD</div>
        <div className='cardSection'>
          <Card className='vidriosCard card'>
            <div className='card-img-container'>
              <Card.Img variant='top' src={vidrio} className='vidrioImg' />
            </div>
            <Card.Body>
              <Card.Title className='card-title'>Vidrios</Card.Title>
            </Card.Body>
          </Card>
          <Card className='metalesCard card'>
            <div className='card-img-container'>
              <Card.Img variant='top' src={metal} className='metalesImg' />
            </div>
            <Card.Body>
              <Card.Title className='card-title'>Metales</Card.Title>
            </Card.Body>
          </Card>
          <Card className='lozasCard card'>
            <div className='card-img-container'>
              <Card.Img variant='top' src={loza} className='lozaImg' />
            </div>
            <Card.Body>
              <Card.Title className='card-title'>Lozas</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>
  )
}

export default Home
