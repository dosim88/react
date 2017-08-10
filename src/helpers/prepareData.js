import { parse } from 'qs';

export default function(store, state) {
  const { location, params, route } = state;

  const query = parse(location.search.substr(1));

  if (route.prepareData)
    return route.prepareData(store, query, params, location);
}