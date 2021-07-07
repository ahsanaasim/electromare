// const Nightmare = require('nightmare');
import Nightmare from 'nightmare';
// const electronPath = require('../node_modules/nightmare/node_modules/electron');


const defaultOptions = {
//   electronPath,
// electronPath: require('../node_modules/electron'),
  show: true,
  typeInterval: 5,
};

// get nightmare link from duckduckgo
export const getLinkFromDuckDuckGo = async (keyword: any) => {
    // console.log((window as any).nightmare)
  const nightmare = new Nightmare(defaultOptions);
  console.log(nightmare)
  nightmare.goto('https://duckduckgo.com').wait(1000000)
  .then(() => {
      console.log('done')
  }).catch((e) => {
      console.log(e)
  })
//   return nightmare
//     .goto('https://duckduckgo.com')
//     .type('#search_form_input_homepage', keyword)
//     .click('#search_button_homepage')
//     .wait('#r1-0 a.result__a')
//     .end();
};