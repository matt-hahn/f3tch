// Validators
import isFunction from '../validators/isFunction';

/**
 * @description :: Preparing the preRequest function
 * @param {any} preRequest :: The preRequest that needs to be prepared
 * @return {any} :: Prepared preRequest
 */
export const checkPreRequest = (preRequest) => {
  if (!isFunction(preRequest)) {
    console.warn(
      `Expected a function for preRequest but got ${typeof preRequest}`
    );
    return null;
  }
  return preRequest;
};

/**
 * @description :: Preparing the preRequest for the fetch execution
 * @param {any} profilePreRequest :: The preRequest that was set in the profile
 * @param {any} preRequest :: The preRequest that was set in in an individual fetch
 * @return {any} :: existing preRequest
 */
export const preparePreRequest = (profilePreRequest, preRequest) => {
  if (!!preRequest) return checkPreRequest(preRequest);
  if (!!profilePreRequest) return checkPreRequest(profilePreRequest);

  return null;
};
