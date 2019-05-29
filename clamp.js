/**
 * 在包含的 `lower` 和 `upper` 边界内的 `number`
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number 要包裹的数
 * @param {number} lower 底边界
 * @param {number} upper 顶边界
 * @returns {number} 返回被包裹的数
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */

function clamp(number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

// export default clamp
// +number 将传入的转为number类型 +'1' => 1
