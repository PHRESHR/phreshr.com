import React from 'react';
import css from 'styled-jsx/css';

export const button = css.resolve`
button {
  font-family: Lato;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .08929em;
  text-decoration: none;
  text-transform: uppercase;
  will-change: transform; opacity;
  display: inline-flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  minWidth: 64px;
  height: 36px;
  border: none;
  outline: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 2px;
  padding: 0 1rem;
  margin: 0.5rem;
  background-color: #eeeeee;
  cursor: pointer
}`;
