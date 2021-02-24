import prepareFetch from './prepareFetch';
import isDefined from '../validators/isDefined';
import isFunction from '../validators/isFunction';

const call = async (data) => {
  const {url, options, responder, preRequest} = prepareFetch(data);

  if (!!preRequest) await preRequest();

  const response = await fetch(url, options);

  if (isDefined(responder) && isFunction(responder))
    return await responder(response);

  return response;
};

export default call;
