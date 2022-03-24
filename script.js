'use strict'
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < week.length; i++) {

    let dayOff = document.createElement('div');

    if (week[i] == 'Saturday' || week[i] == 'Sunday') {
        document.write(week[i].italics());
    } else
    if (week[i] == 'Thursday') {
        document.write(week[i].bold());
    }
    else {
        dayOff.innerHTML = week[i];
    }

    document.body.appendChild(dayOff);
}