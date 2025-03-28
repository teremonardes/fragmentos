import vidrio from '../assets/images/vidrio.jpg'
import vidrio1 from '../assets/images/vidrio1.jpg'
import metal from '../assets/images/metales.jpg'
import metal1 from '../assets/images/metales1.jpg'
import loza from '../assets/images/loza.jpg'

export const vidriosData = [
  {
    id: 'vidrio',
    name: 'Ficha 1',
    src: vidrio,
    desc: 'Descripción del vidrio 1. <a href="/catalogo/vidrios/vidrio2">Vidrio 3</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci orci, iaculis non dui volutpat, semper pharetra orci. Nunc quis est id nisi tempor fringilla. Integer massa sapien, sollicitudin malesuada ex sit amet, pulvinar sollicitudin tortor. Ut accumsan magna a porta hendrerit. Aliquam et odio finibus tellus molestie tempor eget id diam. Nulla facilisi. Proin sollicitudin urna tincidunt leo interdum, a elementum risus elementum. Fusce interdum nulla lectus, a venenatis dui bibendum a. <a href="/descargables/descargable1">Descargable</a>',
    antec: 'Antecedente del vidrio 1.',
    meto: 'Metodologías del vidrio 1.',
    anls: 'Análisis del vidrio 1.'
  },
  {
    id: 'vidrio1',
    name: 'Ficha 2',
    src: vidrio1,
    desc: 'Descripción del vidrio 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci orci, iaculis non dui volutpat, semper pharetra orci. Nunc quis est id nisi tempor fringilla. Integer massa sapien, sollicitudin malesuada ex sit amet, pulvinar sollicitudin tortor. Ut accumsan magna a porta hendrerit. Aliquam et odio finibus tellus molestie tempor eget id diam. Nulla facilisi. Proin sollicitudin urna tincidunt leo interdum, a elementum risus elementum. Fusce interdum nulla lectus, a venenatis dui bibendum a.',
    antec: 'Antecedente del vidrio 2.',
    meto: 'Metodologías del vidrio 2.',
    anls: 'Análisis del vidrio 2.'
  },
  {
    id: 'vidrio2',
    name: 'Ficha 3',
    src: vidrio1,
    desc: 'Descripción del vidrio 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci orci, iaculis non dui volutpat, semper pharetra orci. Nunc quis est id nisi tempor fringilla. Integer massa sapien, sollicitudin malesuada ex sit amet, pulvinar sollicitudin tortor. Ut accumsan magna a porta hendrerit. Aliquam et odio finibus tellus molestie tempor eget id diam. Nulla facilisi. Proin sollicitudin urna tincidunt leo interdum, a elementum risus elementum. Fusce interdum nulla lectus, a venenatis dui bibendum a.',
    antec: 'Antecedente del vidrio 2.',
    meto: 'Metodologías del vidrio 2.',
    anls: 'Análisis del vidrio 2.'
  }
]

export const metalesData = [
  {
    id: 'metal',
    name: 'Metal',
    src: metal,
    desc: 'Descripción del metal 1.',
    antec: 'Antecedente del metal 1.',
    meto: 'Metodologías del metal 1.',
    anls: 'Análisis del metal 1.'
  },
  {
    id: 'metal1',
    name: 'Metal1',
    src: metal1,
    desc: 'Descripción del metal 2.',
    antec: 'Antecedente del metal 2.',
    meto: 'Metodologías del metal 2.',
    anls: 'Análisis del metal 2.'
  }
]

export const lozasData = [
  {
    id: 'loza',
    name: 'Loza',
    src: loza,
    desc: 'Descripción de loza 1.'
    // antec: 'Antecedente del metal 1.',
    // meto: 'Metodologías del metal 1.',
    // anls: 'Análisis del metal 1.'
  },
  {
    id: 'loza1',
    name: 'Loza 1',
    src: loza,
    desc: 'Descripción de loza 2.'
    // antec: 'Antecedente del metal 2.',
    // meto: 'Metodologías del metal 2.',
    // anls: 'Análisis del metal 2.'
  }
]

export const otrosData = [
  {
    id: 'otros',
    name: 'Otro',
    src: false,
    desc: 'Descripción del otros.'

  },
  {
    id: 'otros1',
    name: 'Otros 1',
    src: false

  }
]
