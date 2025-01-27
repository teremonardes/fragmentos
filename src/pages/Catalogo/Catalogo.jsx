import { useParams } from 'react-router-dom'
import './Catalogo.css'
import { vidriosData, metalesData } from '../../data/FragmentosData'

const Catalogo = () => {
  const { material } = useParams()

  // Determina los datos según el material seleccionado
  const data = {
    vidrios: vidriosData,
    metales: metalesData
  }[material] || []

  return (
    <div className='catalogo-container'>
      <div className='titulo-container'>
        <h1 className='catalogo-titulo'>{material.toUpperCase()}</h1>
      </div>
      <div className='catalogo-grid'>
        {data.map((item) => (
          <div key={item.id} className='catalogo-item'>
            <div className='catalogo-img-container'>
              <img src={item.src} alt={item.name} className='catalogo-img' />
            </div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p><strong>Contexto:</strong> {item.cntx}</p>
            <p><strong>Análisis:</strong> {item.anls}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Catalogo
