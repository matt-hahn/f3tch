// Attributes
import {prepareUrl} from '../attributes/url';
import {prepareQuery} from '../attributes/query';
import {prepareHeaders} from '../attributes/headers';
import {prepareCredentials} from '../attributes/credentials';
import {prepareMode} from '../attributes/mode';
import {prepareBody} from '../attributes/body';
import {prepareBodyParser} from '../attributes/bodyParser';

// Profile
import Profile from '../classes/Profile';

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
  profile = new Profile(),
  headers,
  query,
  body,
  bodyParser,
  credentials,
  mode,
}) => {
  const options = {
    method,
    headers: prepareHeaders(...profile.data.headers, ...headers),
  };

  const preparedCredentials = prepareCredentials(
    profile.data.credentials,
    credentials
  );
  if (preparedCredentials) options.credentials = preparedCredentials;

  const preparedMode = prepareMode(profile.data.mode, mode);
  if (preparedMode) options.mode = preparedMode;

  const preparedBody = prepareBody(profile.data.body, body);
  if (preparedBody) {
    const preparedBodyParser = prepareBodyParser(
      profile.data.bodyParser,
      bodyParser
    );
    options.body = !!prepareBodyParser
      ? preparedBodyParser(preparedBody)
      : preparedBody;
  }

  return {
    url: prepareUrl(
      profile.data.url,
      url,
      prepareQuery(...profile.data.query, ...query)
    ),
    options,
    responder: profile.data.responder,
  };
};
