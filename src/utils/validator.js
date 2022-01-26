export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        // if (data.trim() === '') return config.messege
        break
      case 'isEmail': {
        const emailRegEx = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegEx.test(data)
        // if (!emailRegEx.test(data)) return config.messege
        break
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z]+/g
        statusValidate = !capitalRegExp.test(data)
        // if (!capitalRegExp.test(data)) return config.messege
        break
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g
        statusValidate = !digitRegExp.test(data)
        break
      }
      case 'min': {
        statusValidate = data.length < config.value
        break
      }

      default:
        break
    }
    if (statusValidate) return config.messege
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
