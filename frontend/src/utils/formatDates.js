export function createCurrentDate() {
  const date = new Date().toISOString();
  return date;
}

export function dateToISOString(date) {
  const isoDate = new Date(date).toISOString();
  return isoDate;
}

export function dateToLocaleString(date) {
  const localeDate = new Date(date).toLocaleDateString();
  return localeDate;
}

export function isOlderThanAnHour(createdAt, updatedAt) {
  const a = new Date(createdAt);
  const b = new Date(updatedAt);
  const diff = b - a;
  return Math.floor(diff / 60e3) > 60;
}
