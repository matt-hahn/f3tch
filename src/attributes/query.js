// Validators
import isFunction from '../validators/isFunction';
import isArray from '../validators/isArray';
import isObject from '../validators/isObject';
import isDefined from '../validators/isDefined';

/**
 * @description :: Determinating wich format should an array query have
 * @param {String} format :: The format to append
 * @param {Number} index :: The array index of the value
 * @return {String} :: Formatted array query key
 */
export const arrayBrackets = (format, index) => {
  switch (format) {
    case 'brackets': {
      return '[]';
    }

    case 'index': {
      return `[${index}]`;
    }

    default: {
      return '';
    }
  }
};

/**
 * @description :: Parsing the array query
 * @param {String} key :: The query key
 * @param {any} value :: The query value
 * @param {String} seperator :: key value seperator
 * @param {String} format :: The format for the array query key
 * @return {String} :: Formatted array query
 */
export const parseArray = ({key, value, seperator = '=', format = 'none'}) =>
  value
    .map(
      (val, index) => `${key}${arrayBrackets(format, index)}${seperator}${val}`
    )
    .join('&');

/**
 * @description :: Transforming the query to a query string
 * @param {String} key :: The key of the query
 * @param {any} value :: the query value
 * @return {String} :: Stringified query
 */
export const prepareQueryString = (key, value) => {
  if (isArray(value)) return parseArray({key, value});

  if (isObject(value) && isDefined(value.value)) {
    const seperator = value.seperator ? value.seperator : '=';

    if (isArray(value.value)) {
      value.key = key;
      return parseArray(value);
    }

    return `${key}${seperator}${value.value}`;
  }

  return `${key}=${value}`;
};

/**
 * @description :: Parsing the query
 * @param {any} _query :: The query to parse
 * @return {String} :: Stringified query
 */
export const parseQuery = (_query) => {
  const query = isFunction(_query) ? _query() : _query;

  return !isObject(query)
    ? `${query}`
    : Object.keys(query)
        .map((queryKey) => prepareQueryString(queryKey, query[queryKey]))
        .join('&');
};

/**
 * @description :: Stringifying the query for fetch execution
 * @param {Array} queries :: Array of queries
 * @description {String} :: Stringified query
 */
export const prepareQuery = (...queries) => {
  const query = queries.map(parseQuery).join('&');

  return `${query.length ? '?' : ''}${
    query.endsWith('&') ? query.slice(0, -1) : query
  }`;
};
