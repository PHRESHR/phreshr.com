import React from 'react';
import css from 'styled-jsx/cssmacro';

export function grid(
	columns = 12,
	gap = '8px',
	columnGap,
	rowGap,
	height = 'auto',
	minRowHeight = '20px',
	flow,
	rows,
	areas,
	justifyContent,
	alignContent
) {
	const autoRows = `minmax(${minRowHeight}, auto)`;
	const frGetter = (value) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);
	const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

	return css.resolve`
  display: grid;
  height: ${height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  grid-template-rows: ${frGetter(rows)}};
  grid-template-columns: ${frGetter(columns)};
  grid-gap: ${gap};
  column-gap: ${columnGap}};
  row-gap: ${rowGap}};
  grid-template-areas: ${formatAreas(areas)}};
  justify-content: ${justifyContent}};
  align-content: ${alignContent}};
  `;
}

export function cell(color) {
	return css.resolve`
    a { color: ${color} }
  `;
}
