import { useParams } from 'react-router-dom'
import { descargables } from '../../data/DescargablesData'
import './DescargableDetalle.css'

const DescargableDetalle = () => {
  const { id } = useParams()
  // Busca el descargable por id
  const descargable = descargables.find((item) => item.id === id)

  if (!descargable) {
    return <h2>No se encontró el descargable</h2>
  }

  return (
    <div className='detalle-container text-center pb-5'>
      <div className='titulo-container w-100'>
        <h1 className='detalle-titulo p-3'>{descargable.nombre.toUpperCase()}</h1>
      </div>
      <div className='img-container d-flex justify-content-center align-items-center m-auto mt-3' style={{ width: '50%', height: '400px' }}>
        <img src={descargable.src} alt={descargable.nombre} className='mw-100 mh-100 object-fit-contain' />
      </div>
      <p className='detalle-descripcion m-5'>{descargable.descripcion}</p>
      <p className='detalle-precio mx-2'>{descargable.precio}</p>
      <a href={descargable.src} download className='btn btn-dark'>
        Comprar
      </a>
    </div>
  )
}

export default DescargableDetalle
