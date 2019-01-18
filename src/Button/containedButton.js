import { TextButton } from './textButton'
import { className }  from './base'

/**
 * 有阴影的按钮
 * @class
 * @param   {String}  color           - 文本rgb色值，默认值为“'#333333'”或“#ffffff”(根据backgroundColor)，格式为：/^#[0-9a-f]{6}$/
 * @param   {String}  backgroundColor - 背景rgb色值，默认值为“#e0e0e0”，格式为：/^#[0-9a-f]{6}$/
 * @param   {Boolean} disabled        - 禁用按钮，默认false；如果为true，参数color和backgroundColor无效
 * @returns {Object}                  - { className: [ ... ], tagName: 'button', child: { ...ripple } }
 */
export class ContainedButton extends TextButton {
  constructor ({ color, backgroundColor, disabled } = {}) {
    backgroundColor = backgroundColor || '#e0e0e0'
    super({ color, backgroundColor, disabled })
    if (disabled) {
      this.className = [ ...this.className, className + '-background-disabled' ]
    } else {
      this.className = [ ...this.className, className + '-shadow' ]
    }
  }
}
