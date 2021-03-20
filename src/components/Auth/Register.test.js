import Register from './Register'
import EnzymeTestAdapter from '../../EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

EnzymeTestAdapter.init()

const appShallow = shallow(<Register />);

it('Count the div for Login', () => {
  const countDiv = appShallow.find("div")
  expect(countDiv.length).toBe(8)
});

it('Count the button', () => {
    const countDiv = appShallow.find("button")
    expect(countDiv.length).toBe(1)
});

it('Count the form', () => {
    const countDiv = appShallow.find("form")
    expect(countDiv.length).toBe(1)
});

it('Count the H2', () => {
    const countDiv = appShallow.find("h2")
    expect(countDiv.length).toBe(1)
});