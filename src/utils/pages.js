export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getArrayPages = (totalPages) => {
  const arrayPages = []
  for(let i = 0; i < totalPages; i++) {
    arrayPages.push(i + 1)
  }
  
  return arrayPages
}