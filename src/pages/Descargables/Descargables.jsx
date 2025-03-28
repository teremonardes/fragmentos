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
      <div className='titulo-container w-100 text-center '>
        <div className='titulo-descargables p-3'>DESCARGABLES</div>
      </div>
      <div className='descargables-section d-flex justify-content-center align-items-center flex-column flex-md-row gap-4 p-5'>
        {descargables.map((item) => (
          <Card key={item.id} className='card' onClick={() => handleSelectDescargable(item.id)}>
            <div className='card-img-container d-flex align-items-center d-inline-block'>
              <img src={item.src} alt={item.nombre} className='ficha-img mx-auto d-block object-fit-contain mw-100 mh-100 img-fluid' />
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
