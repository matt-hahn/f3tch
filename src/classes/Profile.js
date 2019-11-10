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
    headers: [],
    query: [],
    body: null,
    bodyParser: (data) => data,
    credentials: null,
    mode: null,
    responder: null,
  };

  /**
   * @description :: Object for saving instance settings
   * @memberof Profile
   */
  data = {...Profile.DEFAULT_PROFILE};

  /**
   * @description :: Creates an instance of Profile.
   * @param {String} url :: Default url
   * @memberof Profile
   */
  constructor(url = '') {
    this.data.url = url;
  }

  /**
   * @description :: Setting the url attribute
   * @param {String} url :: Url string
   * @return {Object} :: self
   * @memberof Profile
   */
  url(url) {
    this.data.url = url;
    return this;
  }

  /**
   * @description :: Setting the query attribute
   * @param {Object} query :: Query object
   * @return {Object} :: self
   * @memberof Profile
   */
  query(query) {
    this.data.query = [...this.data.query, query];
    return this;
  }

  /**
   * @description :: Setting the body attribute
   * @param {any} body :: Body attribute
   * @return {Object} :: self
   * @memberof Profile
   */
  body(body) {
    this.data.body = body;
    return this;
  }

  /**
   * @description :: Setting the bodyParser attribute
   * @param {Function} bodyParser :: Function that automatically parses the bodyParser
   * @return {Object} :: self
   * @memberof Profile
   */
  bodyParser(bodyParser) {
    this.data.bodyParser = bodyParser;
    return this;
  }

  /**
   * @description :: Setting the headers attribute
   * @param {Object} headers :: Headers object
   * @return {Object} :: self
   * @memberof Profile
   */
  headers(headers) {
    this.data.headers = [...this.data.headers, headers];
    return this;
  }

  /**
   * @description :: Setting the mode attribute
   * @param {String} mode :: Mode stirng
   * @return {Object} :: self
   * @memberof Profile
   */
  mode(mode) {
    this.data.mode = mode;
    return this;
  }

  /**
   * @description :: Setting the credentials attribute
   * @param {String} credentials :: Credentials string
   * @return {Object} :: self
   * @memberof Profile
   */
  credentials(credentials) {
    this.data.credentials = credentials;
    return this;
  }

  /**
   * @description :: Setting the responder attribute
   * @param {Function} responder :: Responder function
   * @return {Object} :: self
   * @memberof Profile
   */
  responder(responder) {
    this.data.responder = responder;
    return this;
  }
}

export default Profile;
