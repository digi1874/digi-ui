import { objectTag, arrayTag } from '../toStringTag'

import './index.scss'

const className = 'card'

export class Card {
  /**
   * 卡片
   * @param   {Any} params - 元素属性
   * @returns { Object }   - { (...params | child: params), className: [ 'card', (params.className | ...params.className) ] }
   */
  constructor (params) {
    if (toString.call(params) === objectTag) {
      Object.keys(params).forEach(key => {
        this[key] = params[key]
      })
    } else {
      this.child = params
    }

    if (toString.call(this.className) !== arrayTag) {
      this.className = [ className ].concat([ this.className ])
    } else {
      this.className = [ className ].concat(this.className)
    }
  }
}
