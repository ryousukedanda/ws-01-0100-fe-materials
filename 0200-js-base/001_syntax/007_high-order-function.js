/**
 *  7.1 JSのfilter メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして filter メソッドは、使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function filter(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/**
 *  7.2 JSの find メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして find メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i)) {
      return array[i];
    }
  }
  return undefined;
}

/**
 *  7.3 JSの findIndex メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして findIndex メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function findIndex(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i)) {
      return i;
    }
  }

  return -1;
}

/**
 *  7.4 JSの some メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして some メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function some(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i)) {
      return true;
    }
  }

  return false;
}

/**
 *  7.5 JSの every メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして every メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i)) {
      return false;
    }
  }

  return true;
}

/**
 *  7.6 JSの map メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして every メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 *
 */

function map(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i));
  }
  return newArray;
}

/**
 *  7.7 JSの forEach メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして forEach メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 *
 */

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i);
  }

  return undefined;
}

module.exports = {
  filter,
  find,
  findIndex,
  some,
  every,
  map,
  forEach,
};
