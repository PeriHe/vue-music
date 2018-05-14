// dom操作的一些通用代码

// 添加class 
export function addClass(el, className) {
    if (hasClass(el, className)) {
      return
    }
  
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }


// 已经有这个class
export function hasClass(el, className) {
    // 以className或者空白字符开头
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  }

  