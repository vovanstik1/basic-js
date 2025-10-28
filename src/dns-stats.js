const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
  
 ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// const domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];

function getDNSStats(domains) {
  const ans = {};

  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();

    let currentDomain = '';
    for (let part of parts) {
      currentDomain += `.${part}`;
      if (ans[currentDomain]) {
        ans[currentDomain] += 1;
      } else {
        ans[currentDomain] = 1;
      }
    }
  });

  return ans;
}

// console.log(getDNSStats(domains));
module.exports = {
  getDNSStats,
};
