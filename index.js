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

  let reqOF = 3
  let outfieldArray = lineup.filter(player => player.position === 'OF')

  if (outfieldArray.length !== reqOF) {
    return false
  }

  let expectedPositions = ['1B', '2B', '3B', 'P', 'C', 'SS', 'OF']
  let actualPositions = lineup.map(player => player.position)
  let posDiff = expectedPositions.filter(pos => !actualPositions.includes(pos))
  let hasAllPositions = checkPositions(posDiff, lineup)

  if (!hasAllPositions) {
    return false
  }

  return true
}

const checkPositions = (posDiff, lineup) => posDiff.length === 0 && lineup.length === 9

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
