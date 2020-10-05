/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
 export function sortStrings(arr, param = 'asc') {
  return arr.sort((a, b) => {
    if (param === 'desc') {
      return b.localeCompare(a, 'ru', {usage: "sort", caseFirst: 'upper'});
    }
    return a.localeCompare(b, 'ru', {usage: "sort", caseFirst: 'upper'});
  });
}
