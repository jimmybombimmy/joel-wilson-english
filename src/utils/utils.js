export const convertTimestampToDate = (created_at) => {
  const dateData = new Date(created_at).toDateString();
  return dateData
};