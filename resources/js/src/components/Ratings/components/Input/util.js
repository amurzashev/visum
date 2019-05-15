const handleIsLoggedIn = account => account.authenticated;

const handleDidComment = (accountID, ratings) => ratings.some(el => el.uuid === accountID);

export { handleIsLoggedIn, handleDidComment };
