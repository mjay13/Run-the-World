export default (date) => {
    date = new Date(date);
    var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // return date.toDateString();
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    const dayOfWeek = daysArray[date.getDay()];
    return month + "/" + day + "/" + year + " - " + dayOfWeek;
  };