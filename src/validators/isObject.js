import isArray from './isArray';

export default (value) => typeof value === 'object' && !isArray(value);
