import { Props } from '../Props'

import './index.scss'

const className  = 'ripple'
const effect     = document.createElement('div')
effect.className = 'ripple-effect'

export class Ripple extends Props {
  /**
   * 涟波
   * @param   {Object} params        - rgb色值格式为：/^#[0-9a-f]{6}$/
   * @param   {String} params.color  - 颜色，默认值为“#000000”，格式为：/^#[0-9a-f]{6}$/
   * @returns {Object}               - { className: string, onclick: fun }
   */
  constructor (params) {
    super(params)

    const color    = this.color || '#000000'
    this.className = className
    this.onclick   = function (e) {
      const el                 = effect.cloneNode()
      el.style.top             = (e.offsetY - 50) + 'px'
      el.style.left            = (e.offsetX - 50) + 'px'
      el.style.backgroundColor = color
      this.appendChild(el)
      window.setTimeout(() => el.remove(), 1000)
    }

    delete this.color
  }
}
