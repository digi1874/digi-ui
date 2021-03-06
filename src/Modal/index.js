import { createData } from 'digi'
import { concat }     from '../utils'
import { Props }     from '../Props'

import './index.scss'

const className       = 'modal'
const scrollClassName = className + '-scroll'

export class Modal extends Props {
  /**
   * 模态框
   * @param   {Object}              params            - 对象
   * @param   {Object|Array|String} params.head       - 头部内容
   * @param   {Object|Array|String} params.body       - 身体内容
   * @param   {Object|Array|String} params.footer     - 底部内容
   * @param   {Boolean}             params.fullScreen - 是否全屏，默认为false
   * @param   {String}              params.scroll     - 定义滚动，默认为'paper'，全屏时强制为'paper'，'modal'：窗口滚动，'paper'：身体内容滚动
   * @returns {Object}                                - { ...params, className: Array, child: Object, value: Boolean }；value：控制显示隐藏；
   */
  constructor (params) {
    super(params)
    this.$data = createData()

    // 是否全部滚动，全屏时否定全部滚动
    this.scroll = this.fullScreen ? false : this.scroll === 'modal'

    this.className = concat([
      className,
      // 全部滚动
      [ scrollClassName, this.scroll ],
      // 显示
      [ className + '-show', this.$data.$tp('value') ],
      // 隐藏
      [ className + '-hide', this.$data.$tp('value', val => val === false) ]
    ], ...this.className)

    this.child = {
      className: [
        className + '-content',
        // 不是全部滚动也不是全屏，限制全部内容高度
        [ className + '-content-height', !this.scroll && !this.fullScreen ],
        // 全屏
        [ className + '-content-fullscreen', this.fullScreen ]
      ],
      // 点击内容时阻止冒泡
      onclick:  event => event.stopPropagation(),
      child: [
        this.head,
        {
          child: this.body,
          className: [
            // 不是全部滚动，内容body滚动
            [ scrollClassName, !this.scroll ],
            // 全屏时内容bdoy样式
            [ className + '-content-fullscreen-body', this.fullScreen ]
          ]
        },
        this.footer
      ],
    }

    // 清除
    delete this.head
    delete this.body
    delete this.footer
    delete this.scroll
    delete this.fullScreen
  }
  get value () {
    // 获取显示隐藏值
    return this.$data.value
  }
  set value (val) {
    // 设置显示隐藏值
    this.$data.value = !!val

    if (val) {
      // 禁止document.body滚动
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}
