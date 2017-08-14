// Validators
import isFunction from '../validators/isFunction'

/**
 * @description :: Preparing the body of the fetch call
 * @param {any} body :: The body that needs to be prepared
 * @return {any} :: Prepared body
 */
export const checkBody = body => isFunction(body) ? body() : body

/**
 * @description :: Preparing the body for the fetch execution
 * @param {any} profileBody :: The body that was set in the profile
 * @param {any} body :: The body that was set in in an individual fetch
 * @return {any} :: existing body
 */
export const prepareBody = (profileBody, body) => {
	if (body) return checkBody(body)
	if (profileBody) return checkBody(profileBody)

	return null
}
