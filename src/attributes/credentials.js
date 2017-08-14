// Constants
import credentials from '../constants/credentials.constants'

/**
 * @description :: Checking if the passed in credential is valid
 * @param {String} credential :: The credential to check
 * @return {String} :: credential or null if invalid
 */
export const checkCredentials = credential => {
	if (!credentials.includes(credential)) {
		console.warn(`"${credential}" is not a proper credential value. It should be one of: [${credentials}]`)
		return null
	}

	return credential
}

/**
 * @description :: Preparing the credentials for the fetch execution
 * @param {String} profileCredentials :: Credentials that were set in the profile
 * @param {String} credentials :: Credentials that were set in the individual call
 * @return {String} :: Valid credentials or null
 */
export const prepareCredentials = (profileCredentials, credentials) => {
	if (credentials) return checkCredentials(credentials)

	if (profileCredentials) return checkCredentials(profileCredentials)

	return null
}
