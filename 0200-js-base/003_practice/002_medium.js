/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar' 7
 *    'library',  3 => 'arylibr' length 7
 *    'library', -1 => 'ibraryl'
 *    'library', -3 => 'rarylib'
 *
 */
function rotate(str, num) {
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + num < 0) {
      result[arr.length + i + num] = arr[i];
    } else if (i + num > arr.length - 1) {
      result[i + num - arr.length] = arr[i];
    } else {
      result[i + num] = arr[i];
    }
  }

  return result.join('');
}
//AI解答 lengthの余り lengthlengthで考える
// function rotate(str, num) {
//   const arr = str.split('');
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     // (i + num) を配列長で割った余りにすれば循環
//     // 負の数にも対応するように + arr.length してから % を取る
//     const newIndex = (i + num + arr.length) % arr.length;
//     result[newIndex] = arr[i];
//   }

//   return result.join('');
// }

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  const arr = [];
  const boin = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < str.length; i++) {
    if (!boin.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'daabcbeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let count = 0;
  do {
    const index = s1.indexOf(s2);

    if (index === -1) {
      return count;
    } else {
      s1 = s1.substring(index + s2.length);
      count++;
    }
  } while (s1);

  return count;
}
//AI解答　こっちの方がわかりやすい
// function countStr(s1, s2) {
//   let count = 0;
//   let index;

//   while ((index = s1.indexOf(s2)) !== -1) {
//     count++;
//     s1 = s1.substring(index + s2.length);
//   }

//   return count;
// }

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const attempt = Math.floor(str.length / 2);
  for (let i = 0; i < attempt; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  //2からnum-1の値の約数を調べる
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      //次の数が4の場合、iをプラスしない
      if (array[i + 1] === 4) {
        continue;
      }
      //4の次の数を飛ばす
      i++;
    } else {
      sum += array[i];
    }
  }
  return sum;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};
