// Function to get current UTC time and day
function updateTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
    currentDay.textContent = `Current Day: ${day}`;
}

// Update time on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
