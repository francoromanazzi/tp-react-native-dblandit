const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1)

const getErrorForParam = (errors, targetParam) => {
    if(!errors) return '';

    const erroresDelParam = errors.filter(e => e.param === targetParam);

    if (erroresDelParam.length > 0) {
        return capitalize(erroresDelParam[0].msg.split(' ').slice(1).join(' '))
    } else {
        return ''
    }
}

export default getErrorForParam