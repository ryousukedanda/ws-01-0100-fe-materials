/**
 *  3.1 二段にネストした配列を一段にして返す関数を実装してください。
 *
 *   [[1, 2], [3, 4], [5, 6]] => [1, 2, 3, 4, 5, 6]
 *
 */

function flatten(list) {
  return list.flat();
}

/**
 *  3.2 id の配列を各要素がキーの値が true なオブジェクトに変換する関数を実装してください。
 *
 *  input
 *    [1, 3, 4, 5, 9]
 *
 *  output
 *  {
 *    1: true,
 *    3: true,
 *    4: true,
 *    5: true,
 *    9: true,
 *  }
 *
 */

function toMap(list) {
  let output = {};
  for (let i = 0; i < list.length; i++) {
    output = { ...output, [list[i]]: true };
  }
  return output;
}

/**
 *  3.3 オブジェクトが引数で与えられる場合に、それぞれの key と value を順番に配列として返す関数を実装してください。
 *
 *  example:
 *    { a: 1, b: 2 } => ['a', 1, 'b', 2]
 *    {} => []
 *
 */

function toList(obj) {
  return Object.entries(obj).flat();
}

/**
 *  3.4 オブジェクトの配列のid だけを取り出して配列として返す関数を実装してください。
 *
 *  input:
 *    [
 *      { id: 1, category: 'kitchen', name: 'knife' },
 *      { id: 2, category: 'office', name: 'pen' },
 *      { id: 3, category: 'bath', name: 'soap' },
 *      { id: 4, category: 'kitchen', name: 'knife' },
 *      { id: 5, category: 'kitchen', name: 'knife' },
 *    ]
 *
 *  input:
 *    [1, 2, 3, 4, 5]
 *
 */

function ids(obj) {
  const result = [];
  for (element of obj) {
    result.push(element.id);
  }
  return result;
}

/**
 *  3.5 二つの配列をマージする関数を実装してください。
 *      ただし、重複する値はまとめた配列になるように実装してください。
 *
 *  example:
 *    [1, 2], [3, 4] => [1, 2, 3, 4]
 *    [1, 2, 3], [3, 4, 5] => [1, 2, 3, 4, 5]
 *    [3, 2, 1], [3, 4, 5] => [3, 2, 1, 4, 5]
 *    [3, 1, 2], [1, 2, 3] => [3, 1, 2]
 *    [3, 1, 2], [1, 2, 5] => [3, 1, 2, 5]
 *
 */

function merge(a, b) {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return Array.from(new Set(a));
}

/**
 *  3.6 二つの配列のどちらにも存在する要素を返す関数を実装してください。
 *      要素は全て数字とします。
 *
 *  example:
 *    [1, 2], [3, 4] => []
 *    [1, 2, 3], [3, 4, 5] => [3]
 *    [3, 1, 2], [1, 2, 3] => [3, 1, 2]
 *    [3, 1, 2], [1, 2, 5] => [1, 2]
 *
 */

function intersection(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < b.length; y++) {
      if (a[i] === b[y]) {
        result.push(a[i]);
      }
    }
  }
  return result;
}

/**
 *  3.7 二つのオブジェクトの配列をマージする関数を実装してください。
 *      id が同じだったらオブジェクトをマージしてください。
 *
 *  input:
 *    [{ id: 1, a: 1 }, { id: 2, b: 1 }], [{ id: 1, c: 1 }, {id: 3, d: 4}]
 *      => [[id: 1, a: 1, c: 1], { id: 2, b: 1 }, {id: 3, d: 4}]
 *
 *
 *
 *    [{ id: 1, a: 1 }, { id: 2, b: 1 }], [{ id: 3, c: 1 }, {id: 4, d: 4}]
 *      => [{ id: 1, a: 1 }, { id: 2, b: 1 }, { id: 3, c: 1 }, { id: 4, d: 4 }]
 *
 */

function mergeObjOfArray(a, b) {
  let map = new Map();
  for (obj of a) {
    map.set(obj.id, { ...obj });
  }
  for (obj of b) {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  return Array.from(map.values());
}

function sum(...data) {
  let total = 0;

  if (Array.isArray(data)) {
    for (const item of data) {
      total += sum(item);
    }
  } else if (typeof data === 'object' && data !== null) {
    if ('count' in data) {
      total += data.count;
    }
    for (const key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        total += sum(data[key]);
      }
    }
  }

  return total;
}

module.exports = {
  flatten,
  toMap,
  toList,
  ids,
  merge,
  intersection,
  mergeObjOfArray,
  sum,
};
