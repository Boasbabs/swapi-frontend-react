export default function compareDates(a, b) {
  if (!a || !b) {
    return null;
  }
  const dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateA - dateB;
}
