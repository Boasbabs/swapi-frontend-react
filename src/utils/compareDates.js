export default function compareDates(a, b) {
  if (!a || !b) {
    return null;
  }
  let dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateA - dateB;
}
