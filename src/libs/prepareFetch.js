// Attributes
import {prepareUrl} from '../attributes/url'
import {prepareQuery} from '../attributes/query'
import {prepareHeaders} from '../attributes/headers'
import {prepareCredentials} from '../attributes/credentials'
import {prepareMode} from '../attributes/mode'
import {prepareBody} from '../attributes/body'

// Classes
import Profile from '../classes/Profile'

/**
 * @description :: Preparing the fetch attributes for execution
 * @param {String} url :: url string
 * @param {String} method :: fetch method [GET, PUT, POST, ...]
 * @param {String} profile :: profile key
 * @param {Array} headers :: Array of headers
 * @param {Array} query :: Array of queries
 * @param {any} body :: body of the fetch
 * @param {String} credentials :: credentials string
 * @param {String} mode :: mode string
 * @return {Object} :: Fetch attributes
 */
export default ({
	url,
	method,
	profile,
	headers,
	query,
	body,
	credentials,
	mode,
}) => {
	const selectedProfile = Profile.getProfile(profile)

	const options = {
		method,
		headers: prepareHeaders(...selectedProfile.headers, ...headers)
	}

	const preparedCredentials = prepareCredentials(selectedProfile.credentials, credentials)
	if (preparedCredentials) options.credentials = preparedCredentials

	const preparedMode = prepareMode(selectedProfile.mode, mode)
	if (preparedMode) options.mode = preparedMode

	const preparedBody = prepareBody(selectedProfile.body, body)
	if (preparedBody) options.body = preparedBody

	return {
		url: prepareUrl(selectedProfile.url, url, prepareQuery(...selectedProfile.query, ...query)),
		options,
		responder: selectedProfile.responder
	}
}
