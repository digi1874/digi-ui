import './index.scss'
import addStyle from '../style'

const colors     = []
const className  = 'ripple'
const effect     = document.createElement('div')
effect.className = 'ripple-effect'

export class Ripple {
  /**
   * 涟波
   * @param   {Object} param        - rgb色值格式为：/^#[0-9a-f]{6}$/
   * @param   {String} param.color  - 颜色，默认值为“#000000”，格式为：/^#[0-9a-f]{6}$/
   * @returns {Object}              - { className: string, onclick: fun }
   */
  constructor ({ color } = {}) {
    color           = color || '#000000'
    const colorName = `${ className }-${ color.replace('#', '') }`

    if (colors.indexOf(color) === -1) {
      colors.push(color)
      addStyle(`
        .${ colorName }:hover
          { background-color: ${ color }14;
        }`)
    }

    this.className = className
    this.onclick   = function (e) {
      const el                 = effect.cloneNode()
      el.style.top             = (e.offsetY - 50) + 'px'
      el.style.left            = (e.offsetX - 50) + 'px'
      el.style.backgroundColor = color
      this.appendChild(el)
      window.setTimeout(() => el.remove(), 2000);
    }
  }
}
