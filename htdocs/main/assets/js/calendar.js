// date and time elements =====
const dayEl = document.querySelector(".day");
const monthEl = document.querySelector(".month");
const yearEl = document.querySelector(".year");
const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const amPmEl = document.querySelector(".amPm");

// calendar elements =====
const calMonth = document.querySelector(".cal-month");
const calYear = document.querySelector(".cal-year");
const allCalSquares = document.querySelectorAll("td");

// month reference =====
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// set calendar =====
const setCalendar = () => {
	const date = new Date();
	const today = date.getDate();
	const month = date.getMonth();
	const monthName = months[date.getMonth()];
	const year = date.getFullYear();
	const firstOfMonth = new Date(`${monthName} 01, ${year}`).getDay();
	const lastOfMonth = new Date(year, month + 1, 0).getDate();

	calMonth.innerHTML = monthName;
	calYear.innerHTML = year;
	allCalSquares[firstOfMonth].innerHTML = "1";

	const addCalDates = () => {
		for (let i = 0; i < lastOfMonth; i++) {
			if (today === firstOfMonth + i) {
				allCalSquares[firstOfMonth + i].innerHTML = firstOfMonth + i;
				allCalSquares[firstOfMonth + i].classList.add("today");
			} else {
				allCalSquares[firstOfMonth + i].innerHTML = firstOfMonth + i;
				allCalSquares[firstOfMonth + i].classList.remove("today");
			}
		}
	};

	addCalDates();
};

setCalendar();
setInterval(setCalendar, 1000);

// set date and time =====
const setDateTime = () => {
	const date = new Date();
	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const hour24 = date.getHours();
	const hour12 = hour24 < 13 ? hour24 : hour24 - 12;
	const amPm = hour24 < 12 ? "am" : "pm";
	const seconds = date.getSeconds();
	const minutes = date
		.getMinutes()
		.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

	dayEl.innerHTML = `${day}, `;
	monthEl.innerHTML = month;
	yearEl.innerHTML = year;
	hourEl.innerHTML = `${hour12}:`;
	minutesEl.innerHTML = minutes;
	amPmEl.innerHTML = amPm.toUpperCase();
};

setDateTime();
setInterval(setDateTime, 1000);
