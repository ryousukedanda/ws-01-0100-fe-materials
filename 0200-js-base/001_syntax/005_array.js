/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  array.map((arr) => {
    console.log(arr);
  });
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  return [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  const result = array.filter((arr) => {
    return arr === num;
  });
  return result.length > 0;
}

/**
 *  5.4 配列に重複した要素があれば true、そうでなければ false を返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // if (array.length <= 1) {
  //   return false;
  // }

  // for (let x = 0; x < array.length; x++) {
  //   for (let y = x + 1; y < array.length; y++) {
  //     if (array[x] === array[y]) {
  //       return true;
  //     }
  //   }
  // }

  // return false;

  return new Set(array).size !== array.length;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
};
