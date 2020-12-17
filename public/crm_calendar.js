class Calendar {
  constructor(givenDate){
    this.date = givenDate;
    this.week = [];
    for(let i = 0; i<6; i++){
      this.week[i] = theDayoftheWeek(this.date,i);
    }
  }
}

function theDayoftheWeek(s, dayofweek){
  let d = new Date(s.substr(4,4), s.substr(0,2) - 1, s.substr(2,2));
  d.setDate(d.getDate() - d.getDay() + dayofweek);
  return d;
}

class CalendarDay {
  constructor(date){
    
  }
}