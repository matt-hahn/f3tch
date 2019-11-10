// Libs
import call from '../libs/call';

/**
 * @description :: Class for making a fetch call
 * @class Fetch
 */
class Fetch {
  /**
   * @description :: The default object attributes
   * @memberof Fetch
   */
  data = {
    url: '',
    method: null,
    profile: undefined,
    headers: [],
    query: [],
    body: null,
    bodyParser: null,
    credentials: null,
    mode: null,
  };

  /**
   * @description :: Creates an instance of Fetch.
   * @param {String} url :: Url attribute
   * @memberof Fetch
   */
  constructor(url) {
    this.data.url = url;
  }

  /**
   * @description :: Setting the profile attribute
   * @param {Object} profile :: Profile object
   * @return {Object} :: self
   * @memberof Fetch
   */
  profile(profile) {
    this.data.profile = profile;
    return this;
  }

  /**
   * @description :: Setting the query attribute
   * @param {Object} query :: Query object
   * @return {Object} :: self
   * @memberof Fetch
   */
  query(query) {
    this.data.query = [...this.data.query, query];
    return this;
  }

  /**
   * @description :: Setting the body attribute
   * @param {any} body :: body
   * @return {Object} :: self
   * @memberof Fetch
   */
  body(body) {
    this.data.body = body;
    return this;
  }

  /**
   * @description :: Setting the bodyParserr attribute
   * @param {Function} bodyParserr :: body parser function
   * @return {Object} :: self
   * @memberof Fetch
   */
  bodyParserr(bodyParserr) {
    this.data.bodyParserr = bodyParserr;
    return this;
  }

  /**
   * @description :: Setting the headers attribute
   * @param {Object} headers :: Headers object
   * @return {Object} :: self
   * @memberof Fetch
   */
  headers(headers) {
    this.data.headers = [...this.data.headers, headers];
    return this;
  }

  /**
   * @description :: Setting the mode attribute
   * @param {String} mode :: Mode string
   * @return {Object} :: self
   * @memberof Fetch
   */
  mode(mode) {
    this.data.mode = mode;
    return this;
  }

  /**
   * @description :: Setting the credentials attribute
   * @param {String} credentials :: Credentials string
   * @return {Object} :: self
   * @memberof Fetch
   */
  credentials(credentials) {
    this.data.credentials = credentials;
    return this;
  }

  /**
   * @description :: Making a GET call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async get() {
    this.data.method = 'GET';
    return await call(this.data);
  }

  /**
   * @description :: Making a POST call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async post() {
    this.data.method = 'POST';
    return await call(this.data);
  }

  /**
   * @description :: Making a PATCH call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async patch() {
    this.data.method = 'PATCH';
    return await call(this.data);
  }

  /**
   * @description :: Making a PUT call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async put() {
    this.data.method = 'PUT';
    return await call(this.data);
  }

  /**
   * @description :: Making a DELETE call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async delete() {
    this.data.method = 'DELETE';
    return await call(this.data);
  }

  /**
   * @description :: Making a HEAD call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async head() {
    this.data.method = 'HEAD';
    return await call(this.data);
  }

  /**
   * @description :: Making an OPTIONS call
   * @return {Promise} :: Fetch promise
   * @memberof Fetch
   */
  async options() {
    this.data.method = 'OPTIONS';
    return await call(this.data);
  }
}

export default Fetch;
