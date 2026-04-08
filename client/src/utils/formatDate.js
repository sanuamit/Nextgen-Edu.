export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getRelativeTime = (dateString) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const daysDifference = Math.round((new Date(dateString) - new Date()) / (1000 * 60 * 60 * 24));
  return rtf.format(daysDifference, 'day');
};