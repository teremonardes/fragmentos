import { useParams, useNavigate } from 'react-router-dom'
import './Catalogo.css'
import { vidriosData, metalesData, lozasData } from '../../data/FragmentosData'
import Card from 'react-bootstrap/Card'

const Catalogo = () => {
  const { material } = useParams()
  const navigate = useNavigate()

  const handleSelectFicha = (material, id) => {
    navigate(`/catalogo/${material}/${id}`)
  }

  // Determina los datos según el material seleccionado
  const data = {
    vidrios: vidriosData,
    metales: metalesData,
    lozas: lozasData
  }[material] || []

  // Separa el primer elemento del resto
  const firstItem = data.length > 0 ? data[0] : null
  const restItems = data.slice(1)

  return (
    <>
      {/* 🔹 Mostrar solo el primer elemento del material seleccionado */}
      <div className='catalogo-container'>
        <div className='titulo-container'>
          <h1 className='catalogo-titulo'>{material.toUpperCase()}</h1>
        </div>
        {firstItem && (
          <div key={firstItem.id} className='catalogo-item'>
            <div className='catalogo-img-container'>
              <img src={firstItem.src} alt={firstItem.name} className='catalogo-img' />
            </div>
            <div className='catalogo-text-container'>
              <h3 className='title-item'>{firstItem.name.toUpperCase()}</h3>
              <p className='paragraph-item'>{firstItem.desc}</p>
            </div>
          </div>
        )}
      </div>
      {/* 🔹 Sección "VER MÁS" */}
      {restItems.length > 0 && (
        <div className='catalogoSection'>
          <div className='titleSection'>VER MÁS</div>
          <div className='cardSection'>
            {restItems.map((item) => (
              <Card key={item.id} className='card' onClick={() => handleSelectFicha(material, item.id)}>
                <div className='card-img-container'>
                  <img src={item.src} alt={item.name} />
                </div>
                <Card.Body>
                  <Card.Title className='card-title'>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Catalogo
