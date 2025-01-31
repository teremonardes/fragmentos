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
            <h3 className='title-item'>{item.name.toUpperCase()}</h3>
            <p className='paragraph-item'>{item.desc}</p>
            <h3 className='title-item'>ANTECEDENTES:</h3>
            <p className='paragraph-item'>{item.antec}</p>
            <h3 className='title-item'>METODOLOGÍAS:</h3>
            <p className='paragraph-item'>{item.meto}</p>
            <h3 className='title-item'>ANÁLISIS DE LA MUESTRA:</h3>
            <p className='paragraph-item'>{item.anls}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Catalogo
