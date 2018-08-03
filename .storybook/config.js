import './addons'
import { configure } from '@storybook/react';
import Fixtures from "../app/Fixtures";
window.regeneratorRuntime = require('babel-runtime/regenerator');
// automatically import all files ending in *.stories.js
const req = require.context('../app', true, /.web.stories.js$/);

import 'semantic-ui-react'
import '../app/Styles/appStyle.scss'

Fixtures.enableFixtures(500);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
