import {OrderedMap} from 'immutable'

export function arrToMap(arr, DataRecord = OrderedMap) {
  return arr.reduce((acc, item) => {
    return acc.set(item.id, new DataRecord(item))
  }, OrderedMap({}))
}

export function mapToArr(map) {
  return map.valueSeq().toArray()
}
