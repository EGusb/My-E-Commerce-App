export default function objectRemoveBlankValues(obj) {
  // Remove keys from filterObj which are falsy
  // eslint-disable-next-line no-unused-vars
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}
