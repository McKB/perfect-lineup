const validateLineup = (lineup) => {
  let currentTest

  currentTest = lineup.reduce((salary, player) => salary += player.salary, 0)
  if (currentTest > 45000) {
    return false
  }

  // need to go through and sort or filter or reduce by team to determine number of teams represented
  //    (map all team numbers to an array of JUST NUMBERS then see if more than 2 are equal?)
  // need to determine if more than 3 games are represented
  //    (same as teams, but for game numbers)
  // need 3 OF players exactly, and one for each position exactly. 
  //    (find? or some? for the single values. filter out OF players and get length of that new array, check === 3. 

  // returns true if all conditions are met
  return true
}

module.exports = validateLineup
