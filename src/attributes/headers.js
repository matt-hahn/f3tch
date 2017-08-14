// Validators
import isFunction from '../validators/isFunction'
import isObject from '../validators/isObject'

/**
 * @description :: Iterating over headers and combining them
 * @param {Array} headers :: The array of headers
 * @return {Object} :: Combined and validated header object
 */
export const parseHeaders = headers => headers
	.reduce((combined, _header) => {
		const header = isFunction(_header) ? _header() : _header

		if (!isObject(header)) {
			console.warn(`Expecting an object or a function that returns an object for the header but got ${typeof header}`)
			return {...combined}
		}

		return {
			...combined,
			...header,
		}
	}, {})

/**
 * @description :: Preparing headers for the fetch execition
 * @param {Array} headers :: Array of headers
 * @return {Headers} :: Headers object
 */
export const prepareHeaders = (...headers) => new Headers(parseHeaders(headers))
