export const calculateRating = (ratings) => {
  const totalCount = ratings.length;
  if (totalCount === 0) {
    return null;
  }
  let totalRating = 0;
  ratings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return totalRating / totalCount;
};
