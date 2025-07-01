export function IsOdd(num) {
  if (!num) return false;

  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
