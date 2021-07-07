// const Nightmare = require('nightmare');
import Nightmare from 'nightmare';
import Electron from 'electron';
import pie from "puppeteer-in-electron";
import puppeteer from "puppeteer-core";
// type App = import("electron").App;
const defaultOptions = {
//   electronPath,
electronPath: Electron.remote.app.getPath('exe'),
  show: true,
  typeInterval: 5,
};

// get nightmare link from duckduckgo
export const getLinkFromDuckDuckGo = async (keyword: any) => {
    console.log(Electron.remote.app.getPath('exe'))
    // console.log((window as any).nightmare)
      const nightmare = new Nightmare(defaultOptions);
      console.log(nightmare)
    //   console.log(window.require('electron'))
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
//     //     .end();
// console.log(app)
//     await pie.initialize(app);
//     const browser = await pie.connect(app, puppeteer);

//     const window = new BrowserWindow();
//     const url = "https://example.com/";
//     await window.loadURL(url);

//     const page = await pie.getPage(browser, window);
//     console.log(page.url());
//     window.destroy();
};