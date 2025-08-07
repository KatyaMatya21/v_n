const countdownDate = new Date(2025, 8, 25, 0, 0, 0).getTime();

const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');

const interval = setInterval(() => {
	const now = new Date().getTime();

	const distance = countdownDate - now;

	if (distance < 0) {
		clearInterval(interval);
		document.querySelector('.countdown-timer').innerHTML = "<h2>Событие началось!</h2>";
		return;
	}

	const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
	const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

	const formatTime = (time) => (time < 10 ? `0${time}` : time);

	weeksEl.innerText = formatTime(weeks);
	daysEl.innerText = formatTime(days);
	hoursEl.innerText = formatTime(hours);
	minutesEl.innerText = formatTime(minutes);

}, 1000);
