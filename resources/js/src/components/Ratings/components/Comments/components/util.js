import moment from 'moment';

moment.locale('ru');

const convertToMomentAgoReadable = (serverTime) => {
  if (!serverTime) return 'несколько секунд назад';
  const parsedServerTime = moment(serverTime);
  const userTimeZoneOffsett = new Date().getTimezoneOffset() / (-60);
  const serverTimeMillSecs = Date.parse(parsedServerTime);
  const serverTimeInMillLocalTimeZone = serverTimeMillSecs + (userTimeZoneOffsett * 3600000);
  const timeAgo = moment(serverTimeInMillLocalTimeZone).fromNow();
  return timeAgo;
};

const convertToMomentAgoText = (createdAt, updatedAt) => {
  const a = new Date(createdAt).getTime();
  if (!updatedAt) {
    return 'добавлен';
  }
  const b = new Date(updatedAt).getTime();
  return a === b ? 'добавлен' : 'обновлен';
};

export { convertToMomentAgoText, convertToMomentAgoReadable };
