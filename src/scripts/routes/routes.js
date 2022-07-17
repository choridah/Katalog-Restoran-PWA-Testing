/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/like': Like,
  '/detail/:id': Detail,
};
export default routes;