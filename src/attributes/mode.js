// Constants
import modes from '../constants/modes.constants';

/**
 * @description :: Checking if the passed in mode is valid
 * @param {String} mode :: The mode to check
 * @return {String} :: mode or null if invalid
 */
export const checkMode = (mode) => {
  if (!modes.includes(mode)) {
    console.warn(
      `"${mode}" is not a proper mode value. It should be one of: [${modes}]`
    );
    return null;
  }

  return mode;
};

/**
 * @description :: Preparing the mode for the fetch execution
 * @param {String} profileMode :: mode that were set in the profile
 * @param {String} mode :: mode that were set in the individual call
 * @return {String} :: Valid mode or null
 */
export const prepareMode = (profileMode, mode) => {
  if (mode) return checkMode(mode);

  if (profileMode) return checkMode(profileMode);

  return null;
};
