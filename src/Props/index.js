import { objectTag } from '../toStringTag'
import { concat }    from '../utils'

export class Props {
  /**
   * 复制元素属性
   * @param   {Any}      params - 元素属性
   * @returns { Object }        - { ...params, child: Array, className: Array } || { child: [ params ], className: Array }
   */
  constructor (params = {}) {
    if (toString.call(params) === objectTag) {
      Object.keys(params).forEach(key => {
        this[key] = params[key]
      })
    } else {
      this.child = params
    }

    this.className = concat(this.className)
    this.child     = concat(this.child)
  }
}
