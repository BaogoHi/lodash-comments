/**
 * `slice` 的基本实现
 *
 * @private
 * @param {Array} array 要剪切的数组
 * @param {number} [start=0] 开始的位置
 * @param {number} [end=array.length] 结束的位置
 * @returns {Array} 返回剪切后的 `array`
 */
function baseSlice(array, start, end) {
  let index = -1;
  let { length } = array;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

export default baseSlice;

/**
 * 问题: x ===> 0
 * 
 * 
 * 本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0
 * https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it
 */
