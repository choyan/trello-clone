export default function upsert(array, item) {
  // (1)
  const i = array.findIndex((_item) => _item.id === item.id);
  if (i > -1) array[i] = item;
  // (2)
  else array.push(item);
}
