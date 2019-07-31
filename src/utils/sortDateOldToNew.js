export default function sortDateOldToNew(a, b) {
  let dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateA - dateB;
}

