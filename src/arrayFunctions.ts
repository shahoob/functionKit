export function add(array: any[], index: number, value: any) {
  if (!index) {
    const last = array.length - 1;
    array[last] = value;
    return;
  }
  array[index] = value;
  return;
}

export function remove(array: any[], index: number) {
  if (array[index] === undefined) {
    return new Error('An item at index ${index}, does not exist');
  }
  delete array[index];
  return;
}
