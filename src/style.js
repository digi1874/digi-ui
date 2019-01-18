const style = document.createElement('style')
style.type  = 'text/css'

/**
 * 添加样式元素
 * @function addStyle
 * @param {String} cssText - css样式文本
 */
export default cssText => {
  const newStyle = style.cloneNode()
  const text     = document.createTextNode(cssText)
  newStyle.appendChild(text)
  document.head.appendChild(newStyle)
}
