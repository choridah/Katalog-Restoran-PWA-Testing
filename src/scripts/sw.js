/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

// eslint-disable-next-line comma-spacing
self.addEventListener('install',(event) => {
  // eslint-disable-next-line rest-spread-spacing
  event.waitUntil(CacheHelper.cachingAppShell([... assets, './']));
});

// eslint-disable-next-line no-restricted-globals
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line comma-spacing
self.addEventListener('activate',(event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return; // skip the request. if request is not made with http protocol

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
