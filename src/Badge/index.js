import addStyle     from '../style'
import { adaptBW }  from '../color'
import { concat }   from '../utils'
import { Props }    from '../Props'

import './index.scss'

const className  = 'badge'
const classNames = []

export class Badge extends Props {
  /**
   * 徽章
   * @param   {Object}              params                 - rgb色值, 格式为：/^#[0-9a-f]{6}$/
   * @param   {String}              params.badgeContent    - 徽章里的内容
   * @param   {String}              params.backgroundColor - 背景颜色，默认值为“#e10050”
   * @param   {String}              params.color           - 字体颜色，默认值根据backgroundColor选择黑或白色字体
   * @param   {Array|Object|String} params.child           - 徽章所在的元素
   * @returns {Object}                                     - { className: string, child: [ ...child, badge ]}
   */
  constructor (params) {
    super(params)

    this.backgroundColor = this.backgroundColor || '#e10050'
    this.color           = this.color || adaptBW(this.backgroundColor)
    const csNm           = `${ className }-${ this.color.replace('#', '') }${ this.backgroundColor.replace('#', '') }`

    if (classNames.indexOf(csNm) === -1) {
      classNames.push(csNm)
      addStyle(`
        .${ csNm } {
          color            : ${ this.color };
          background-color : ${ this.backgroundColor };
        }`)
    }

    this.className = concat([ 'badge-content' ], this.className)
    this.child     = concat(this.child, { className: [className, csNm], text: this.badgeContent })

    delete this.badgeContent
    delete this.backgroundColor
    delete this.color
  }
}
