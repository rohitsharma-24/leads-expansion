export let NAV_ROUTES = [
  {
    match: (path) => path === '/',
    path: '/',
    name: 'Dashboard'
  },
  {
    basePath: '/insights',
    match: (path) => path.match(/\/insights/),
    path: '/insights/clicks',
    name: 'Insights',
  },
  {
    match: (path) => path.match(/\/(listings|products)/),
    path: '/listings',
    name: 'Listings'
  },
  {
    match: (path) => path.match(/\/ppl/),
    path: '/ppl',
    name: 'PPL'
  },
  {
    match: (path) => path.match(/\/leads/),
    path: '/leads',
    name: 'Leads'
  },
  {
    match: (path) => path.match(/\/reviews/) && !path.match(/\/reviews_/),
    path: '/reviews',
    name: 'Reviews'
  },
  {
    match: (path) => path.match(/\/resources/),
    path: '/resources',
    name: 'Resources'
  },
  {
    match: (path) => path.match(/\/bidding/),
    path: '/bidding',
    name: 'Bidding'
  },
];