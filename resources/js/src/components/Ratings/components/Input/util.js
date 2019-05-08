const handleIsLoggedIn = account => account.authenticated;

const handleDidComment = (accountID, ratings) => ratings.some(el => el.user_id === accountID);

export { handleIsLoggedIn, handleDidComment };
