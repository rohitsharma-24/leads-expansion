export let NAV_ROUTES = [
  {
    match: (path) => path === '/vp',
    path: '/vp',
    name: 'Dashboard'
  },
  {
    basePath: '/vp/insights',
    match: (path) => path.match(/\/insights/),
    path: '/vp/insights/clicks',
    name: 'Insights',
  },
  {
    match: (path) => path.match(/\/(listings|products)/),
    path: '/vp/listings',
    name: 'Listings'
  },
  {
    match: (path) => path.match(/\/ppl/),
    path: '/vp/ppl/bids',
    name: 'PPL'
  },
  {
    match: (path) => path.match(/\/leads/),
    path: '/leads',
    name: 'Leads'
  },
  {
    match: (path) => path.match(/\/reviews/) && !path.match(/\/reviews_/),
    path: '/vp/reviews',
    name: 'Reviews'
  },
  {
    match: (path) => path.match(/\/resources/),
    path: '/vp/resources',
    name: 'Resources'
  },
  {
    match: (path) => path.match(/\/bidding/),
    path: '/vp/bidding',
    name: 'Bidding'
  },
];