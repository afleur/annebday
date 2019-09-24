/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//console.log('Hello World from Webpacker')

import { click } from '../plugins/onclick';
click();

import { girl_or_boy } from '../plugins/girl_or_boy';
girl_or_boy();

import { swag_or_not } from '../plugins/swag';
swag_or_not();

import { help_click } from '../plugins/neededhelp';
help_click();

import { baby_click } from '../plugins/baby_click';
baby_click ();

import { pic_display_two } from '../plugins/clues_two';
pic_display_two ();

import { pic_display_three } from '../plugins/clues_three';
pic_display_three();

import { found_click } from '../plugins/found_btn';
found_click();

import { nothappy_click } from '../plugins/nothappy_btn';
nothappy_click();

import { gift_click } from '../plugins/gift';
gift_click();

import { message_click } from '../plugins/message';
message_click();
