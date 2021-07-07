// @ts-nocheck
import Nightmare from 'nightmare';

process.once('loaded', () => {
    console.log('asd')
    const nightmare = new Nightmare({ show: true, electronPath: require('electron') })
        // (window).nightmare = nightmare;
    nightmare.goto('https://duckduckgo.com').wait(1000000)
        .then(() => {
            console.log('done')
        }).catch((e) => {
            console.log(e)
        })
    // const electronPath = electron.remote.app.getPath('exe');
    // console.log(nightmare);
    // return nightmare
    // .goto('https://duckduckgo.com')
    // .type('#search_form_input_homepage', 'keyword')
    // .click('#search_button_homepage')
    // .wait('#r1-0 a.result__a')
    // .end();
});