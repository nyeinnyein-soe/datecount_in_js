let startDate = document.querySelector("#startDate");
let endDate = document.querySelector('#endDate');
let button = document.querySelector('.btn');
let span = document.querySelector('.result');
span.textContent = new Date();

// console.log(startDate);
// console.log(endDate);
// console.log(button)

// const s = startDate.value;
// console.log(s);

// const e = endDate.value;
// console.log(e);

button.addEventListener('click', function () {
    let s = new Date(startDate.value);
    // console.log(s);
    let e = new Date(endDate.value);
    // console.log(e)
    function diffDates() {
        if (s > e) {
            span.textContent = "You start date is greater than the end date , so re-select your start date and end date"
        } else if (s < e) {
            let checkyears = e.getFullYear() - s.getFullYear();
            let checkmonths = e.getMonth() - s.getMonth();
            let checkdays = e.getDate() - s.getDate();
            let checkhours = e.getHours() - s.getHours();
            let checkminutes = e.getMinutes() - s.getMinutes();
            let checkseconds = e.getSeconds() - s.getSeconds();

            // console.log(checkdays);
            // console.log(e.getHours());
            // console.log(s.getHours());

            if (checkseconds < 0) {
                checkseconds += 60;
                checkminutes--;
            }
            if (checkminutes < 0) {
                checkminutes += 60;
                checkhours--;
            }
            if (checkhours < 0) {
                checkhours += 24;
                checkdays--;
            }
            if (checkdays < 0) {
                // Borrow days from previous month
                let prevMonth = new Date(e.getFullYear(), e.getMonth(), 0);
                checkdays += prevMonth.getDate();
                checkmonths--;
            }
            if (checkmonths < 0) {
                checkmonths += 12;
                checkyears--;
            }
            // console.log(`${checkyears} years ${checkmonths} months ${checkdays} days ${checkhours} hours ${checkminutes} minutes and ${checkseconds} seconds`)
            return { checkyears, checkmonths, checkdays, checkhours, checkminutes, checkseconds };
        }
        else {
            console.log("they are same");
        }
    }


    let diff = diffDates();
    document.querySelector('.result').textContent = `${diff.checkyears} year ${diff.checkmonths} months ${diff.checkdays} days ${diff.checkhours} hours ${diff.checkminutes} minutes and ${diff.checkseconds} seconds`;
})

