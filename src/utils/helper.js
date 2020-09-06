export const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}

export const isJson = value => {
  try {
    JSON.parse(value)
  } catch (e) {
    return false
  }
  return true
}

export const groupBy = (array, key) => {
  return array.reduce((initalObject, item) => {
    ;(initalObject[item[key]] = initalObject[item[key]] || []).push(item)
    return initalObject
  }, {})
}

export const limitWord = (string, max, suffif = '...') => {
  if (isEmpty(string)) return ''

  let words = string.split(' ')
  if (words.length <= max) {
    return string
  }

  string = words.slice(0, max)
  return string.join(' ') + suffif
}

export const sortByKey = (array, key) => {
  return array.sort((a, b) => {
    let x = a[key]
    let y = b[key]

    return x < y ? -1 : x > y ? 1 : 0
  })
}

export const convertSlug = str => {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  )
  str = str.replace(/ + /g, ' ')
  str = str.trim()

  return str
}

export const isValidArray = array => Array.isArray(array) && array.length > 0

export const isGoodString = (string, length) => {
  return string && typeof string === 'string' && string.length > (length || 0)
}

export const isValidObject = obj => {
  return obj && typeof obj === 'object' && obj === Object(obj) && obj !== null
}

export const isValidGetResponse = response => {
  return (
    isValidObject(response) && response.rows && response.count !== undefined
  )
}

export const getHoursAndMinutes = date => {
  if (isValidObject(date) && date.isValid && date.isValid()) {
    return date.format('HH:mm')
  }

  return ''
}

export const getDateOnly = date => {
  if (isValidObject(date) && date.isValid && date.isValid()) {
    return date.format('DD/MM/YYYY')
  }

  return ''
}
