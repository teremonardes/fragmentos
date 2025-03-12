import { useNavigate } from 'react-router-dom'
import { descargables } from '../../data/DescargablesData'
import './Descargables.css'
import Card from 'react-bootstrap/Card'

const Descargables = () => {
  const navigate = useNavigate()

  const handleSelectDescargable = (id) => {
    navigate(`/descargables/${id}`)
  }

  return (
    <>
      <div className='titulo-container'>
        <div className='titulo-descargables'>DESCARGABLES</div>
      </div>
      <div className='descargables-section'>
        {descargables.map((item) => (
          <Card key={item.id} className='card' onClick={() => handleSelectDescargable(item.id)}>
            <div className='card-img-container'>
              <img src={item.src} alt={item.nombre} />
            </div>
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>{item.nombre}</Card.Title>
              <Card.Text>{item.descripcion}</Card.Text>
              <Card.Text className='precio'>{item.precio}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Descargables
