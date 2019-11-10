// Validators
import isFunction from '../validators/isFunction';

/**
 * @description :: Preparing the bodyParser function
 * @param {any} bodyParser :: The bodyParser that needs to be prepared
 * @return {any} :: Prepared bodyParser
 */
export const checkBodyParser = (bodyParser) => {
  if (!isFunction(bodyParser)) {
    console.warn(
      `Expected a function for bodyParser but got ${typeof bodyParser}`
    );
    return null;
  }
  return bodyParser;
};

/**
 * @description :: Preparing the bodyParser for the fetch execution
 * @param {any} profileBodyParser :: The bodyParser that was set in the profile
 * @param {any} bodyParser :: The bodyParser that was set in in an individual fetch
 * @return {any} :: existing bodyParser
 */
export const prepareBodyParser = (profileBodyParser, bodyParser) => {
  if (bodyParser) return checkBodyParser(bodyParser);
  if (profileBodyParser) return checkBodyParser(profileBodyParser);

  return null;
};
