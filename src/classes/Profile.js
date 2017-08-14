// Validators
import isDefined from '../validators/isDefined'

/**
 * @description :: A class for creating fetch profiles
 * @class Profile
 */
class Profile {

	/**
	 * @description :: The default profile object
	 * @static
	 * @memberof Profile
	 */
	static DEFAULT_PROFILE = {
		url: '',
		method: null,
		profile: null,
		headers: [],
		query: [],
		body: null,
		credentials: null,
		mode: null,
		responder: null,
	}

	/**
	 * @description :: Saved profiles
	 * @static
	 * @memberof Profile
	 */
	static profiles = {}

	/**
	 * @description :: Function for setting a profile
	 * @static
	 * @memberof Profile
	 */
	static setProfile = ({profile, ...data}) => Profile.profiles[profile] = data

	/**
	 * @description :: Function for getting the profile
	 * @static
	 * @memberof Profile
	 */
	static getProfile = profile => {
		if (isDefined(profile) && Profile.profiles[profile] === undefined) {
			console.warn(`Profile ${profile} does not exist`)
			return {...Profile.DEFAULT_PROFILE}
		}

		if (!isDefined(profile)) return {...Profile.DEFAULT_PROFILE}

		return Profile.profiles[profile]
	}

	/**
	 * @description :: Object for saving instance settings
	 * @memberof Profile
	 */
	data = {...Profile.DEFAULT_PROFILE}

	/**
	 * @description :: Creates an instance of Profile.
	 * @param {String} profile :: The name of the profile
	 * @memberof Profile
	 */
	constructor(profile) {
		if (!profile) throw new Error('Please set a profile name')

		this.data.profile = profile
	}

	/**
	 * @description :: Setting the url attribute
	 * @param {String} url :: Url string
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	url(url) {
		this.data.url = url
		Profile.setProfile(this.data)
		return this
	}

	/**
	 * @description :: Setting the query attribute
	 * @param {Object} query :: Query object
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	query(query) {
		this.data.query = [...this.data.query, query]
		Profile.setProfile(this.data)
    return this
  }

  /**
	 * @description :: Setting the body attribute
	 * @param {any} body :: Body attribute
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	body(body) {
		this.data.body = body
		Profile.setProfile(this.data)
    return this
  }

  /**
	 * @description :: Setting the headers attribute
	 * @param {Object} headers :: Headers object
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	headers(headers) {
		this.data.headers = [...this.data.headers, headers]
		Profile.setProfile(this.data)
    return this
	}

	/**
	 * @description :: Setting the mode attribute
	 * @param {String} mode :: Mode stirng
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	mode(mode) {
		this.data.mode = mode
		Profile.setProfile(this.data)
		return this
	}

	/**
	 * @description :: Setting the credentials attribute
	 * @param {String} credentials :: Credentials string
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	credentials(credentials) {
		this.data.credentials = credentials
		Profile.setProfile(this.data)
		return this
	}

	/**
	 * @description :: Setting the responder attribute
	 * @param {Function} responder :: Responder function
	 * @return {Object} :: self
	 * @memberof Profile
	 */
	responder(responder) {
		this.data.responder = responder
		Profile.setProfile(this.data)
		return this
	}
}

export default Profile
