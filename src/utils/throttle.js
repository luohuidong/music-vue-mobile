function throttle(fn, interval) {
  // 用于存储上一次触发的时间
  let last = Date.now(); 

  return function() {
    // 保留调用时的 this 上下文
    let context = this;

    // 保留调用时传入的参数
    let args = arguments;

    // 记录本次触发回调的时间
    let now = Date.now();

    if (now - last >= interval) {
      last = now;
      fn.apply(context, args);
    }
  };
}

export default throttle;
