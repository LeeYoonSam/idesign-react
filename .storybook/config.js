import { configure } from "@storybook/react";

const req = require.context("../", true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);


// import { configure } from '@kadira/storybook';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);
