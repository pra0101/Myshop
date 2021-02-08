export function formatTelephoneNumber(val){
  return val.replace(/\./g,' ');
}

export function getShippingDateRange(dates, withDays){
  const fromDate = formatDates(dates.fromDate);
  const toDate = formatDates(dates.toDate);

  if(withDays){
    if(fromDate.year == toDate.year){
      return `${fromDate.day}., ${fromDate.month}. ${fromDate.date} - ${toDate.day}., ${toDate.month}. ${toDate.date}, ${toDate.year}`;
    }else{
      return `${fromDate.day}., ${fromDate.month}. ${fromDate.date}, ${fromDate.year} - ${toDate.day}., ${toDate.month}. ${toDate.date}, ${toDate.year}`;
    }
  }

  if(fromDate.year == toDate.year){
    return `${fromDate.month}. ${fromDate.date}-${toDate.month}. ${toDate.date}, ${toDate.year}`;
  }else{
    return `${fromDate.month}. ${fromDate.date}, ${fromDate.year}-${toDate.month}. ${toDate.date}, ${toDate.year}`;
  }
}

export function getFormattedDate(date){
  const formattedDate = formatDates(date);
  return `${formattedDate.day}., ${formattedDate.month}. ${formattedDate.date}, ${formattedDate.year}`;
}

export function formatDates(val){
  let date = new Date(val);
  date = date.toString();
  date = date.split(" ");
  return {
    date: date[2],
    month: date[1],
    year: date[3],
    day: date[0]
  }
}

export function maskNumber(val){
  const length = val.length;
  let maskedVal = "";
  for(let i = 0; i<length;i++){
    maskedVal += 'X';
  }
  return maskedVal;
}