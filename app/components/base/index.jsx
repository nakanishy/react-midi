import React from 'react'

export default class BaseComponent extends React.Component {

  constructor () {
    super()
    this.autoBind()
  }

  autoBind () {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(prop => typeof this[prop] === 'function')
      .forEach(method => {
        this[method] = this[method].bind(this);
      })
  }
}
