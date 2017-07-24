import { parse } from 'qs';

import { compact } from 'lodash/array';
import { map } from 'lodash/collection.js';

export default function(store, state) {
  //это state роутера, из него будет получена:
  // локация, список параметров из адресной строки и список роутов
  const { location, params, routes } = state;

  //query параметры переданные в get запросе
  const query = parse(location.search.substr(1));

  //перебор всех роутеров и собирание в кучу всех имеющихся ф-й route.prepareData
  //тут нужна еще и фильтрация по роутам
  const prepareDataFns = compact(map(routes, route => route.prepareData));

  //перебор всех prepareDataFns и вызов каждой с соотв. параметрами
  map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}