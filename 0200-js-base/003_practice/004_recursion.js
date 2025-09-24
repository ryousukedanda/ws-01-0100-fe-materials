/**
 *
 *  ※※※ こちらのファイルの問題は全て再帰処理を用いて解いてください。 ※※※
 *
 */

/**
 *  4.1 数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence(n, sum = 0) {
  if (n === 0) {
    return sum;
  }
  sum = n + sumSequence(n - 1);
  return sum;
}

/**
 *  4.2 フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci(num) {
  if (num === 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [1, 1];

  const arr = fibonacci(num - 1); // n-1 個のフィボナッチ配列を取得
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]); // 最後の 2 つを足して追加
  return arr;
}

/**
 *  4.3 多次元配列を一次元配列に変換する関数を実装してください。
 *
 *  example:
 *    [[[1, 2], [3, 4, [5, 6]]], [[7, 8]]] [[1,2],[3,4,[5,6]],[7,8]] [1,2,3,4,[5,6],7,8]
 *      => [1, 2, 3, 4, 5, 6, 7, 8]
 *    [[[[[[[[1, 2, [3, 4]]]]]]]]]
 *      => [1, 2, 3, 4]
 *
 */

function flatten(data) {
  let result = [];

  for (const num of data) {
    if (Array.isArray(num)) {
      // 再帰的にフラット化して結合
      result = result.concat(flatten(num));
    } else {
      result.push(num);
    }
  }

  return result;
}

/**
 *  4.4 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize(node, sum = 0) {
  if (node.type === 'file') {
    return node.size;
  }

  if (node.type === 'folder' && node.children) {
    let sum = 0;
    for (const child of node.children) {
      sum += fileSize(child);
    }
    return sum;
  }
  return 0;
}

module.exports = {
  sumSequence,
  fibonacci,
  flatten,
  fileSize,
};
