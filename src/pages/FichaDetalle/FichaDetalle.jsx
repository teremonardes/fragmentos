import { useParams, useNavigate } from 'react-router-dom'
import './FichaDetalle.css'
import { vidriosData, metalesData, lozasData, otrosData } from '../../data/FragmentosData'
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'

const FichaDetalle = () => {
  const { material, id } = useParams()
  const navigate = useNavigate()

  // Obtiene los datos según el material seleccionado
  const data = {
    vidrios: vidriosData,
    metales: metalesData,
    lozas: lozasData,
    otros: otrosData
  }[material] || []

  useEffect(() => {
    if (!id && data.length > 0) {
      navigate(`/catalogo/${material}/${data[0].id}`, { replace: true })
    }
  }, [id, material, data, navigate])

  // Encuentra la ficha seleccionada (si ya se redirigió)
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
            <div className='titulo-container w-100 text-center'>
              <h1 className='ficha-titulo p-3'>{ficha.name.toUpperCase()}</h1>
            </div>
            <div className='ficha-item d-flex justify-content-center  align-items-center  p-5 flex-column flex-md-row'>
              <div className='ficha-img-container  w-50 d-flex align-items-center d-inline-block'>
                <img src={ficha.src} alt={ficha.name} className='ficha-img mx-auto d-block object-fit-contain mw-100 mh-100' />
              </div>
              <div className='ficha-text-container w-50 '>
                <h3 className='title-item bt-2 fs-2 text-center mt-4'>{ficha.name.toUpperCase()}</h3>
                <p className='paragraph-item fs-5 text-start ' dangerouslySetInnerHTML={{ __html: ficha.desc }} />
              </div>
            </div>

            {/* 🔹 Sección "VER MÁS" */}
            {restItems.length > 0 && (
              <div className='fichaSection  pt-5'>
                <div className='titleSection  mb-2 px-3 d-flex justify-content-end'>VER MÁS</div>
                <div className='cardSection d-flex align-items-center justify-content-center py-4 m-0 w-100 gap-4'>
                  {restItems.map((item) => (
                    <Card key={item.id} className='card w-25' onClick={() => handleSelectFicha(material, item.id)}>
                      <div className='card-img-container w-100 d-flex justify-content-center'>
                        <img src={item.src} alt={item.name} className='mw-100 mh-100' />
                      </div>
                      <Card.Body>
                        <Card.Title className='card-title text-center'>{item.name}</Card.Title>
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
