// Without generics
export function removeItemV1(arr: unknown[], item: unknown) {
  return arr.filter((element) => element !== item)
}

// With generics
export function removeItemV2<TElement>(arr: TElement[], item: TElement) {
  return arr.filter((element) => element !== item)
}
