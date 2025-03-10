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
      <h1 className='detalle-titulo'>{descargable.nombre}</h1>
      <p className='detalle-descripcion'>{descargable.descripcion}</p>
      <p className='detalle-precio'>{descargable.precio}</p>
      <a href={descargable.src} download className='btn btn-primary'>
        Descargar
      </a>
    </div>
  )
}

export default DescargableDetalle
