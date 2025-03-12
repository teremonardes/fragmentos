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
    <div className='detalle-container'>
      <div className='titulo-container'>
        <h1 className='detalle-titulo'>{descargable.nombre.toUpperCase()}</h1>
      </div>
      <div className='img-container'>
        <img src={descargable.src} alt={descargable.nombre} />
      </div>
      <p className='detalle-descripcion'>{descargable.descripcion}</p>
      <p className='detalle-precio'>{descargable.precio}</p>
      <a href={descargable.src} download className='btn btn-dark'>
        Comprar
      </a>
    </div>
  )
}

export default DescargableDetalle
