
document.addEventListener('DOMContentLoaded', ()=> {

const tracker = new Calendar();
const septemberFirst2025 = new Date(2025, 8, 1);
console.log(septemberFirst2025);



})

class Calendar {
    constructor() {
        this.today = new Date;
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
        this.day = this.today.getDay();

        this.container = document.querySelector('.calendar');
        this.monthYear = document.querySelector('.month-year');
        this.specificDay = document.querySelector('.days-container');
        this.renderTopBar();
        this.repeatFor(2025, 8);
    
        
    }
    renderTopBar() {
        this.monday = document.createElement('div');
        this.monday.innerHTML = "Mon";
        this.monday.classList.add('specific-day');
        this.tuesday = document.createElement('div');
        this.tuesday.innerHTML = "Tue";
        this.tuesday.classList.add('specific-day');
        this.wednesday = document.createElement('div');
        this.wednesday.innerHTML = "Wed";
        this.wednesday.classList.add('specific-day');
        this.thursday = document.createElement('div');
        this.thursday.innerHTML = "Thu";
        this.thursday.classList.add('specific-day');
        this.friday = document.createElement('div');
        this.friday.innerHTML = "Fri";
        this.friday.classList.add('specific-day');
        this.saturday = document.createElement('div');
        this.saturday.innerHTML = "Sat";
        this.saturday.classList.add('specific-day');
        this.sunday = document.createElement('div');
        this.sunday.innerHTML = "Sun";
        this.sunday.classList.add('specific-day');

        this.specificDay.appendChild(this.monday);
        this.specificDay.appendChild(this.tuesday);
        this.specificDay.appendChild(this.wednesday);
        this.specificDay.appendChild(this.thursday);
        this.specificDay.appendChild(this.friday);
        this.specificDay.appendChild(this.saturday);
        this.specificDay.appendChild(this.sunday);
    }
    getFirstDayOfMonth(year, month) {
        let day = new Date(year, month, 1).getDay();
        // convert Sunday=0 to 7
        return day === 0 ? 7 : day; 
    }
    getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    startAfter(year, month) {
        const startAt = this.getFirstDayOfMonth(year, month);
        for (let i = 1; i < startAt; i++) {
            const empty = document.createElement('div');
            empty.classList.add('day', 'empty');
            this.specificDay.appendChild(empty);
        }
        return startAt;
    }
    repeatFor(year, month) {
        const days = this.getDaysInMonth(year, month);
        const startAt = this.startAfter(year, month);

        for (let i = 1; i <= days; i++) {
            this.renderDay(i);
        }

        const totalCells = startAt - 1 + days; 
        const remaining = 35 - totalCells;
        for (let i = 0; i < remaining; i++) {
            const empty = document.createElement('div');
            empty.classList.add('day', 'empty');
            this.specificDay.appendChild(empty);
        }
    }
    renderDay(day) {
        this.day = document.createElement('div');
        this.day.classList.add('day');
        this.currentDay = document.createElement('div');
        this.currentDay.classList.add('day-alignment')
        this.currentDay.innerHTML = `${day}`;
        this.day.appendChild(this.currentDay);
        this.specificDay.appendChild(this.day);
    }
}