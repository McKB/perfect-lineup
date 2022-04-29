const validateLineup = (lineup) => {
  let totalSalary = lineup.reduce((salary, player) => salary += player.salary, 0)

  if (totalSalary > 45000) {
    return false
  }

  let maxTeams = 2
  let teamsArray = lineup.map(player => player.teamId).sort((a, b) => a - b)
  let hasEnoughTeams = checkNums(teamsArray, maxTeams)

  if (!hasEnoughTeams) {
    return false
  }

  let maxGames = 3
  let gamesArray = lineup.map(player => player.gameId).sort((a, b) => a - b)
  let hasEnoughGames = checkNums(gamesArray, maxGames)

  if (!hasEnoughGames) {
    return false
  }

  // need 3 OF players exactly, and one for each position exactly. 
  //    (find? or some? for the single values. filter out OF players and get length of that new array, check === 3. 

  // returns true if all conditions are met
  return true
}

const checkNums = (numsArray, maxNum) => {
  let count = 1

  for (let i = 1; i < numsArray.length; i++) {
    let num = numsArray[i]
    let previousNum = numsArray[i - 1]

    if (num === previousNum) {
      count++
    }
    if (count > maxNum) {
      return false
    }
  }

  return true
}

module.exports = validateLineup
