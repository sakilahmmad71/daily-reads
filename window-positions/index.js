/**
 * The screen size is the width and height of the screen: a monitor or a mobile screen.
 */
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

/**
 * The available screen size consists of the width and height of the active screen 
 * without the Operating System toolbars.
 */
const availScreenWidth = window.screen.availWidth;
const availScreenHeight = window.screen.availHeight;

/**
 * The window outer size consists of the width and height of the entire browser 
 * window, including the address bar, tabs bar, and other browser panels.
 */
const windowOuterWidth = window.outerWidth;
const windowOuterHeight = window.outerHeight;

/**
 * The window inner size (aka viewport size) consists of the width and 
 * height of the viewport that displays the web page.
 */
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

/**
 * If you’d like to access the window inner size without the scrollbars
 */
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeigh;

/**
 * The web page size consists of the width and height of the page content rendered.
 */
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;