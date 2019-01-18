import { TextButton } from './textButton'
import { className }  from './base'

/**
 * 有阴影的按钮
 * @class
 * @param   {String} color           - 文本rgb色值，默认值为“'#333333'”或“#ffffff”(根据backgroundColor)，格式为：/^#[0-9a-f]{6}$/
 * @param   {String} backgroundColor - 背景rgb色值，默认值为“#e0e0e0”，格式为：/^#[0-9a-f]{6}$/
 * @returns {Object}                 - { className: [ ... ], tagName: 'button', child: { ...ripple } }
 */
export class ContainedButton extends TextButton {
  constructor ({ color, backgroundColor } = {}) {
    backgroundColor = backgroundColor || '#e0e0e0'
    super({ color, backgroundColor })
    this.className = [ ...this.className, className + '-shadow' ]
  }
}
