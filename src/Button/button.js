import addStyle       from '../style'
import { TextButton } from './textButton'
import { className }  from './base'

const classNames = []

/**
 * 按钮
 * @class
 * @param   {String} color           - 文本rgb色值，默认值为“'#333333'”或“#ffffff”(根据backgroundColor)，格式为：/^#[0-9a-f]{6}$/
 * @param   {String} backgroundColor - 背景rgb色值，默认值为“transparent”，格式为：/^#[0-9a-f]{6}$/
 * @param   {String} borderColor     - 边框rgb色值，默认值为(backgroundColor或color)+'88'
 * @returns {Object}                 - { className: [ ... ], tagName: 'button', child: { ...ripple } }
 */
export class Button extends TextButton {
  constructor ({ color, backgroundColor, borderColor } = {}) {
    super({ color, backgroundColor })
    color = color || (backgroundColor ? '#ffffff' : '#333333')

    let csNm = `${ className }-border-`
    if (backgroundColor) {
      csNm += backgroundColor.replace('#', '')
    } else {
      csNm += color.replace('#', '')
    }

    if (classNames.indexOf(csNm) === -1) {
      classNames.push(csNm)

      let hoverBorderColor = 'transparent'
      borderColor = borderColor || (backgroundColor ? backgroundColor : color)
      if (borderColor !== 'transparent') {
        borderColor += '88'
        hoverBorderColor = backgroundColor || color
      }
      addStyle(`
        .${ csNm } {
          border: 1px solid ${borderColor};
        }
        .${ csNm }:hover {
          border-color: ${hoverBorderColor};
        }`)
    }

    this.className = [ ...this.className, csNm ]
  }
}
