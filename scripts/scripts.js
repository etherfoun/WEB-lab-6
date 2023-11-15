const getFibonacci = () => {
  let firstTerm = 0;
  let secondTerm = 1;
  let currentTerm;
  let i = 2;

  while (i < 21) {
    currentTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = currentTerm;

    i++;
  }

  return secondTerm;
};

const getDate = () => {
  const today = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let second = today.getSeconds();
  let minute = today.getMinutes();
  let hour = today.getHours();

  day = setLeadingZero(day);
  month = setLeadingZero(month);
  second = setLeadingZero(second);
  minute = setLeadingZero(minute);
  hour = setLeadingZero(hour);

  const startOfSemester = new Date("2023-09-01T00:00:00");
  const difference = Math.round((today - startOfSemester) / 1000);
  const dayOfWeek = daysOfWeek[today.getDay()];

  let answer =
    day +
    "-" +
    month +
    "-" +
    year +
    "<p>" +
    dayOfWeek +
    "<p>" +
    hour +
    "-" +
    minute +
    "-" +
    second +
    "<p>" +
    difference;

  return answer;
};

const setLeadingZero = (num) => {
  return ("0" + num).slice(-2);
};

const displayTaskAnswer = (task, answer) => {
  const elements = document.getElementsByClassName(task);
  if (elements.length > 0) {
    elements[0].innerHTML = "<h1>" + answer + "</h1>";
  }
};

const validateEmail = () => {
	const email = document.getElementById("email").value;
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
		
	const messageDiv = document.getElementById('message');
	if (!regexEmail.test(email)) {
		messageDiv.innerHTML = "<h1> Email should be written in this format: qwerty12345@email.com!</h1>";
	}
	else {
		messageDiv.innerHTML = "";
	}
};

window.onload = () => {
	displayTaskAnswer("task1", getFibonacci());
  displayTaskAnswer("task2", getDate());
	const button = document.querySelector('input[type="button"]');
	button.addEventListener("click", validateEmail);
};
