import addStyle                 from '../style'
import { ripple }               from '../ripple'
import { darkenColor, adaptBW } from '../color'
import { className, baseColor } from './base'

const classNames = []

/**
 * 文本按钮
 * @class
 * @param   {String} color           - 文本rgb色值，默认值为“'#333333'”或“#ffffff”(根据backgroundColor)，格式为：/^#[0-9a-f]{6}$/
 * @param   {String} backgroundColor - 背景rgb色值，默认值为“transparent”，格式为：/^#[0-9a-f]{6}$/
 * @returns {Object}                 - { className: [ ... ], tagName: 'button', child: { ...ripple } }
 */
export class TextButton {
  constructor ({ color, backgroundColor } = {}) {
    if (!color && backgroundColor) {
      // 无文本颜色，根据背景颜色设置黑白文本颜色
      color = adaptBW(backgroundColor)
    } else {
      color = color || baseColor
    }

    // className
    let csNm = `${ className }-text-${ color.replace('#', '') }`
    // 鼠标经过背景颜色
    let hoverBgcolor = color + '14'
    if (backgroundColor) {
      // 有背景颜色的处理
      csNm += backgroundColor.replace('#', '')
      hoverBgcolor = darkenColor(backgroundColor, 20)
    }

    if (classNames.indexOf(csNm) === -1) {
      classNames.push(csNm)
      addStyle(`
        .${ csNm } {
          color            : ${ color };
          background-color : ${ backgroundColor || 'transparent' };
        }
        .${ csNm }:hover {
          background-color: ${ hoverBgcolor };
        }`)
    }

    this.className = [ className, csNm ]
    this.tagName   = 'button'
    this.child     = new ripple({ color })
  }
}
