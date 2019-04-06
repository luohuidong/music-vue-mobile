/**
 * 防抖功能
 * @param {function} fn 回调函数
 * @param {number} delay 延迟的毫秒数
 */
function debounce(fn, delay) {
  // 定时器
  let timer = null;

  return function() {
    // 保留调用时的 this 上下文
    const context = this;
    
    // 保留调用时传入的参数
    const args = arguments;

    // 每次事件被触发时，都去清楚之前旧的定时器
    if (timer) {
      clearTimeout(timer);
    }

    // 设定新的定时器
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

export default debounce;
