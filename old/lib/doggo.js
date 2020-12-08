const Doggo = (filter, id, dimensions) => {
  let options = ''
  let query = 'random'
  let size = '500/500'
  if (id) query = `id=${id}`
  if (dimensions) size = `${dimensions[0]}/${dimensions[1]}`

  switch(filter) {
    case 'greyscale':
    case 'g':
      options = 'g'
      break
    case 'pixelate':
    case 'p':
      options = 'p'
      break
    case 'blur':
    case 'b':
      options = 'b'
      break
    case 'invert':
    case 'i':
      options = 'i'
      break
    case 'sepia':
    case 's':
      options = 's'
      break
    default:
      break
  }

  const xsmol = `https://placedog.net/50/50/${options}?${query}`
  const smol = `https://placedog.net/150/150/${options}?${query}`
  const med = `https://placedog.net/300/300/${options}?${query}`
  const lorg = `https://placedog.net/575/400/${options}?${query}`
  const xlorg = `https://placedog.net/900/750/${options}?${query}`
  const custom = `https://placedog.net/${size}/${options}?${query}`

  return { xsmol, smol, med, lorg, xlorg, custom }
}

export default Doggo
