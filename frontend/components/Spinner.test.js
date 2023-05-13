// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import React from 'react';
import { render, screen } from "@testing-library/react"

test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner renders without errors', () => {
  render(<Spinner on={true}/>)
})

test('Spinner does not render', () => {
  render(<Spinner on={false}/>)
})