import {Map} from 'immutable'

export function arrToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, item) => {
    return acc.set(item.id, new DataRecord(item))
  }, new Map({}))
}

export function mapToArr(map) {
  return map.valueSeq().toArray()
}
