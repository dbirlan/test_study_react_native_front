import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import SearchScreen from '../src/screens/SearchScreen';
import renderer from 'react-test-renderer';

test('SearchScreen snapshot', () => {
  const snap = renderer.create(
    <SearchScreen />
  ).toJSON();

  expect(snap).toMatchSnapshot();
});
//Mock function
const add = jest.fn(() => 3);

//Unit test : only tests one thing
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});
