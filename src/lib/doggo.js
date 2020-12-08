const Doggo = (filter) => {
  let options = ''

  switch(filter) {
    case 'greyscale':
    case 'g':
      options = '/g'
      break
    case 'pixelate':
    case 'p':
      options = '/p'
      break
    case 'blur':
    case 'b':
      options = '/b'
      break
    case 'invert':
    case 'i':
      options = '/i'
      break
    case 'sepia':
    case 's':
      options = '/s'
      break
    default:
      break
  }

  const xsmol = `https://placedog.net/50/50${options}?random`
  const smol = `https://placedog.net/150/150${options}?random`
  const med = `https://placedog.net/300/300${options}?random`
  const lorg = `https://placedog.net/575/400${options}?random`
  const xlorg = `https://placedog.net/900/750${options}?random`

  return { xsmol, smol, med, lorg, xlorg }
}

export default Doggo
