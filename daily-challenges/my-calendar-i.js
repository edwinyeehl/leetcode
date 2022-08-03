class MyCalendar {
  constructor() {
    this.calendar = [];
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */

  book(start, end) {
    for (let i = 0; i < this.calendar.length; i++) {
      if (this.calendar[i][0] >= end || this.calendar[i][1] <= start) {
        continue;
      } else {
        return false;
      }
    }
    this.calendar.push([start, end]);
    return true;
  }
}

const myCalendar = new MyCalendar();
console.log(myCalendar.book(10, 20));
console.log(myCalendar.book(15, 25));
console.log(myCalendar.book(20, 30));
