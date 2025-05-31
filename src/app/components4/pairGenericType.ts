// Pair Type learning

function pair<T, U>(num: T, str: U): [T, U] {
  return [num, str]
}

pair(23, 'hello')
pair<number, string>(23, 'hello')
