export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  const result = Number(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);

  return result;
  
}

export function preparationTimeInMinutes(numberOfLayers) {
    const result = Number(numberOfLayers + numberOfLayers)
 
   return result
 }


 export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    const preparationTime = preparationTimeInMinutes(numberOfLayers);
    const actualMinutes = (EXPECTED_MINUTES_IN_OVEN - remainingMinutesInOven(actualMinutesInOven))
  
    const result = Number(preparationTime + actualMinutes)
    return result
  }

  console.log(totalTimeInMinutes(1,5))