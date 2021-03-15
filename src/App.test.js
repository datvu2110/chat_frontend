import App from './App'
import EnzymeTestAdapter from './EnzymeTestAdapter'
import { shallow } from  'enzyme'
import '@testing-library/jest-dom';
import React from 'react'

EnzymeTestAdapter.init()

const appShallow = shallow(<App></App>);

it('Count the div', () => {
  const countDiv = appShallow.find("div")
  expect(countDiv.length).toBe(1)
});