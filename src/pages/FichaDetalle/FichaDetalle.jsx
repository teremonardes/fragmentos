import { useParams, useNavigate } from 'react-router-dom'
import './FichaDetalle.css'
import { vidriosData, metalesData, lozasData } from '../../data/FragmentosData'
import Card from 'react-bootstrap/Card'

const FichaDetalle = () => {
  const { material, id } = useParams()
  const navigate = useNavigate()

  // Obtiene los datos según el material seleccionado
  const data = {
    vidrios: vidriosData,
    metales: metalesData,
    lozas: lozasData
  }[material] || []

  // Encuentra la ficha seleccionada
  const ficha = data.find((item) => item.id === id)
  const restItems = data.filter((item) => item.id !== id) // Excluye la ficha actual

  const handleSelectFicha = (material, id) => {
    navigate(`/catalogo/${material}/${id}`)
  }

  return (
    <>
      {
      ficha
        ? (

          <div className='ficha-container'>
            <div className='titulo-container'>
              <h1 className='ficha-titulo'>{ficha.name.toUpperCase()}</h1>
            </div>
            <div className='ficha-item'>
              <div className='ficha-img-container'>
                <img src={ficha.src} alt={ficha.name} className='ficha-img' />
              </div>
              <div className='ficha-text-container'>
                <h3 className='title-item'>{ficha.name.toUpperCase()}</h3>
                <p className='paragraph-item' dangerouslySetInnerHTML={{ __html: ficha.desc }} />
              </div>
            </div>

            {/* 🔹 Sección "VER MÁS" */}
            {restItems.length > 0 && (
              <div className='fichaSection'>
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
          </div>
          )
        : (
          <h2>No se encontró la ficha</h2>
          )
}
    </>
  )
}

export default FichaDetalle
