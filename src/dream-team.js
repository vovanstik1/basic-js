const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let ans = [];

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((e) => {
    if (typeof e === 'string') {
      const name = e.trim();

      ans.push(name[0].toUpperCase());
    }
  });

  return ans.sort().join('');
}

module.exports = {
  createDreamTeam,
};
