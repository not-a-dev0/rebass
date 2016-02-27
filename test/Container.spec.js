
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Container } from '../src'

const renderer = TestUtils.createRenderer()

describe('Container', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Container />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Container')
  })

  it('should have a max width', () => {
    expect(tree.props.style.maxWidth).toEqual(1024)
  })

  it('should have margin auto', () => {
    expect(tree.props.style.margin).toEqual('auto')
  })
})

