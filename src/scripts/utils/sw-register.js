/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line import/no-unresolved
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Service worker not supported in this browser');
};
// eslint-disable-next-line eol-last
export default swRegister;