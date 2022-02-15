const parse = (s: string) => {
  s.replace(/\s/g, '');
  const parsed = s.split('/').filter(Boolean);

  const getAsNumber = (index: number) => {
    const value = parsed.at(index);

    if (!value) {
      return null;
    }

    return parseInt(value, 10);
  };

  return [-5, -4, -3, -2, -1].map(getAsNumber);
};

export const getDate = (timeString: string): Date => {
  const [_year, _month, _date, _hours, _minutes] = parse(timeString);

  const current = new Date();

  const year = _year || current.getFullYear();
  const month = _month || current.getMonth();
  const date = _date || current.getDate();
  const hours = _hours || current.getHours();
  const minutes = _minutes || current.getMinutes();

  return new Date(year, month, date, hours, minutes);
};

export default {};
