export function Accumulation(...value: number[]) {
  return value.reduce((t, v) => t + v, 0)
}

export function Multiplication(...value: number[]) {
  return value.reduce((t, v) => t * v, 1)
}
