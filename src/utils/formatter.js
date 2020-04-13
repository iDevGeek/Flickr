export function formatNumber(num) {
  if (num) {
    const parsed = window.parseInt(num);
    if (!window.isNaN(parsed)) {
      return parsed.toLocaleString();
    }
  }
  return '';
}
