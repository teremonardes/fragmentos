import CarouselF from "../../components/Carousel/Carousel"
import Card from 'react-bootstrap/Card'
import './Home.css'

const Home = () => {
  return (
    <>
    <CarouselF></CarouselF>
    <div className="homeMission">
      <div className="homeTitle">NUESTRA MISIÓN</div>
      <div className="homeText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta pariatur nemo? Exercitationem possimus tempora laudantium quisquam incidunt quaerat eos voluptatem repellat cum eius voluptatibus praesentium, nemo rem aperiam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, mollitia iusto vero voluptates veritatis voluptatibus? Quis explicabo ipsam quisquam aperiam. Quis distinctio non minima voluptas neque illo provident obcaecati consequatur.</div>
    </div>

    <div className="catalogoSection">
<div className="titleSection">MATERIALIDAD</div>
<div className="cardSection">
  <div className="vidriosCard">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>VIDRIOS</Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div className="metalesCard">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>METALES</Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div className="lozasCard">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>LOZAS</Card.Title>
      </Card.Body>
    </Card>
    </div>
</div>
    </div>
    </>
  )
}

export default Home
