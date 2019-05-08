const handleHasAnyRatings = (ratings) => {
  if (ratings.length) {
    return true;
  }
  return false;
};

const handleDidComment = (accountID, ratings) => ratings.some(el => el.user_id === accountID);

export { handleHasAnyRatings, handleDidComment };
