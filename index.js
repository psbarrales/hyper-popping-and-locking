'use strict';

/**
 * Colors
 */

const black = '#1d2021';
const red = '#cc241d';
const green = '#98971a';
const yellow = '#d79921';
const blue = '#458588';
const magenta = '#b16286';
const cyan = '#689d6a';
const gray = '#a89984';

const lightBlack = '#928374';
const lightRed = '#f42c3e';
const lightGreen = '#b8bb26';
const lightYellow = '#fabd2f';
const lightBlue = '#99c6ca';
const lightMagenta = '#d3869b';
const lightCyan = '#7ec16e';
const lightGray = '#ebdbb2';

/**
 * Variables
 */

const primaryColor = '#fbf1c7';
const secondaryColor = '#f2e5bc';

/**
 * General
 */

const backgroundColor = '#21222d';
const foregroundColor = '#f2e5bc';
const borderColor = '#272836';
const cursorColor = '#21222d';
const selectionColor = '#272836';
const linkColor = secondaryColor;

/**
 * Tabs
 */

const inactiveTabBackgroundColor = '#242424';
const activeTabBorderColor = primaryColor;
const activeTabColor = primaryColor;
const dividerColor = 'rgba(157, 165, 180, 0.25)';

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// light
			lightBlack,
			lightRed,
			lightGreen,
			lightYellow,
			lightBlue,
			lightMagenta,
			lightCyan,
			lightGray
		],
		termCSS: `
			${config.termCSS || ''}
			x-screen a {
		    color: ${linkColor};
		  }
			::selection {
			  background: ${selectionColor};
			}
		`
	});
};
