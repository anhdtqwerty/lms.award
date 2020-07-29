import moment from 'moment'

export default {
  except (obj = {}, keys = []) {
    const exceptedObj = {}
    Object.keys(obj).forEach((key) => {
      if (!keys.includes(key)) {
        exceptedObj[key] = obj[key]
      }
    })
    return exceptedObj
  },
  flatten (arr = []) {
    return Array.prototype.concat.apply([], arr)
  },
  // By default, filter all props that Boolean(value) === false
  filterObject (obj = {}, filter = Boolean) {
    const output = {}
    if (obj['not-clear-request']) {
      return obj
    }
    for (const key in obj) {
      if (filter(obj[key], key) || obj[key] === 0) {
        output[key] = obj[key]
      }
    }
    return output
  },
  toLocaleDateTimeString (time) {
    return new Date(time).toLocaleString('vi')
  },
  formatTime (value, format) {
    if (!value || !format) {
      return value
    }
    return moment(value).format(format)
  },
  prettifyDate (time, format = 'DD/MM') {
    if (!time) {
      return null
    }
    const thisYear = moment().year()
    const m = moment(time)
    return m.format(m.year() === thisYear ? format : format + '/YYYY')
  },
  familiarizeDate (time, append) {
    const mom = moment(time).startOf('day')
    const today = moment().startOf('day')
    let date = ''
    if (mom.isSame(today)) {
      date = 'Today'
    } else if (
      today
        .clone()
        .add(1, 'day')
        .isSame(mom)
    ) {
      date = 'Tomorrow'
    } else if (
      today
        .clone()
        .subtract(1, 'day')
        .isSame(mom)
    ) {
      date = 'Yesterday'
    } else {
      let format = 'Ngày DD MMMM'
      if (!mom.isSame(today, 'year')) {
        format += ' YYYY'
      }
      date = mom.format(format)
    }
    return date + (append ? moment(time).format(append) : '')
  },
  dobToAge (dateString) {
    if (!dateString) {
      return 'Unknown'
    }
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  },
  dateStringToTime (date) {
    // to GMT +7
    return moment(date, 'YYYY-MM-DD')
      .utcOffset(-480)
      .valueOf()
  },
  async bulkRequest (items = [], promise) {
    const output = { dones: [], errs: [] }
    for (const item of items) {
      await promise(item)
        .then(res => output.dones.push(res))
        .catch(e => output.errs.push(e))
    }
    return output
  },
  buildRequest (request) {
    request = this.filterObject(request)
    if (!request) {
      return ''
    }
    return (
      '?' +
      Object.keys(request)
        .map(k => k + '=' + request[k])
        .join('&')
    )
  },
/* eslint-disable */
  removeUnicode (str) {
    str = str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    str = str.replace(/đ/g, 'd')
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      '-'
    )
    str = str.replace(/-+-/g, '-') // thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, '')

    return str.trim().toLocaleLowerCase()
  },
  /* eslint-enable */
  formatMoney (amount, decimalCount = 0, decimal = '.', thousands = ',') {
    try {
      decimalCount = Math.abs(decimalCount)
      decimalCount = isNaN(decimalCount) ? 0 : decimalCount

      const negativeSign = amount < 0 ? '-' : ''

      const i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString()
      const j = i.length > 3 ? i.length % 3 : 0

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '') +
        ' đ'
      )
    } catch (e) {
      console.log(e)
    }
  }
}
