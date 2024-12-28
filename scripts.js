// Expand the light-grey section and display hover text on hover
function showText(element) {
    const lightGreyPart = element.querySelector('.light-grey');
    const hoverText = lightGreyPart.querySelector('.hover-text');
    lightGreyPart.style.left = 'calc(100% + 300px)'; // Slide to the right
    lightGreyPart.style.width = '500px';            // Extend width
    hoverText.style.visibility = 'visible';         // Make text visible
    hoverText.style.opacity = '1';                  // Fade in effect
}

// Reset the light-grey section and hide hover text on mouse out
function hideText(element) {
    const lightGreyPart = element.querySelector('.light-grey');
    const hoverText = lightGreyPart.querySelector('.hover-text');
    lightGreyPart.style.left = '100%';              // Reset position
    lightGreyPart.style.width = '300px';            // Reset width
    hoverText.style.visibility = 'hidden';          // Hide text
    hoverText.style.opacity = '0';                  // Fade out effect
}

// Dynamically update the current time and date
function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const date = now.toDateString();
    document.getElementById('datetime').innerHTML = `
        <h1>${hours}:${minutes}</h1>
        <p>${date}</p>
    `;
}

// Automatically update the time and date every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display immediately on page load

function showPopup(content) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = content;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


// scripts.js

// Fungsi untuk menghasilkan jadwal setiap hari Rabu
function generateWednesdaySchedules(year) {
    const schedules = {};
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    let currentDate = startDate;

    while (currentDate <= endDate) {
        if (currentDate.getDay() === 3) { // 3 = Rabu
            const dateStr = currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
            schedules[dateStr] = {
                time: '18:00',
                location: 'Room A',
                details: 'Weekly Robotic Meeting'
            };
        }
        currentDate.setDate(currentDate.getDate() + 1); // Tambah 1 hari
    }

    return schedules;
}

// Buat jadwal meeting untuk tahun 2024
const meetingSchedule = generateWednesdaySchedules(2024);

document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const scheduleDetails = document.getElementById('schedule-details');

    // Inisialisasi kalender menggunakan Flatpickr
    flatpickr(calendar, {
        inline: true,
        onChange: function (selectedDates, dateStr) {
            if (meetingSchedule[dateStr]) {
                const { time, location, details } = meetingSchedule[dateStr];
                scheduleDetails.innerHTML = `
                    <li>Time: ${time}</li>
                    <li>Location: ${location}</li>
                    <li>Details: ${details}</li>
                `;
            } else {
                scheduleDetails.innerHTML = `
                    <li>Time: --:--</li>
                    <li>Location: --</li>
                    <li>Details: No meeting in this semester</li>
                `;
            }
        }
    });
});

