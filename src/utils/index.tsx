import moment from 'moment';

export const shortenAddress = (address: string): string => {
  let start = address.substring(0, 6);
  let end = address.substring(address.length - 1 - 3, address.length);
  const result = `${start}....${end}`;
  return result;
};
export const formatTimeStamp = (date: string) =>
  parseInt(moment(date).format('x'), 10);

export const formatNumberToCurrencyString = (number: number) =>
  new Intl.NumberFormat().format(number);
