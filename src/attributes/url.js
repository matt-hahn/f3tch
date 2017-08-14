// Validators
import isFunction from '../validators/isFunction'
import isString from '../validators/isString'

/**
 * @description :: Validating the url
 * @param {String} _url :: the url to validate
 * @return {String} :: Validated url
 */
export const validateUrl = _url => {
	const url = isFunction(_url) ? _url() : _url

	if (!isString(url)) console.warn(`Expecting a string or a function that returns a string for the url but got ${typeof url}`)

	return `${url}`
}

/**
 * @description :: Combining and preparing urls for fetch execution
 * @param {Array} urls :: Array of urls
 * @return {String} :: Prepared url
 */
export const prepareUrl = (...urls) => urls
	.map(validateUrl)
	.join('')
