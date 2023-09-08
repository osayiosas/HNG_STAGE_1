document.addEventListener("DOMContentLoaded", () => {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];
  const dayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  dayElement.textContent = currentDay;

  // Get UTC time
  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const utcTime = pad(today.getUTCHours()) + ":" + pad(today.getUTCMinutes());
  utcTimeElement.textContent = utcTime;
});
