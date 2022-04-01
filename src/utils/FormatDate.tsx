/**
 * Format Date
 * Change yyyy-mm-dd to dd/mm/yyyy
 */
 const formatDate = (date: string) => {
  if (date) {
    return date.split('-').reverse().join('/')
  }
  return date
}

export default formatDate
