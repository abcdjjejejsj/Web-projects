const channelID = "2922478";
const readKey = ""; // Leave empty if public
const warningThreshold = 50.0;
let alertActive = false;

// User interaction detection for sound play
let userInteracted = false;
window.addEventListener('click', () => {
  userInteracted = true;
});
window.addEventListener('touchstart', () => {
  userInteracted = true;
});
window.addEventListener('scroll', () => {
  userInteracted = true;
});

// Get the alert audio element once
const alertTone = document.getElementById('alertTone');

// For chart and CSV download
let temperatureData = [];
let timeLabels = [];
let csvData = [["Time", "Temperature (°C)"]]; // CSV header

const ctx = document.getElementById('tempChart').getContext('2d');
const tempChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: timeLabels,
    datasets: [{
      label: 'Water Temp (°C)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#e65100',
      borderWidth: 2,
      data: temperatureData,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});

async function updateTemperature() {
  try {
    const apiURL = `https://api.thingspeak.com/channels/${channelID}/fields/1/last.json${readKey ? '?api_key=' + readKey : ''}`;
    const response = await fetch(apiURL);
    const json = await response.json();
    const temp = parseFloat(json.field1);

    document.getElementById('tempDisplay').innerHTML = `${temp.toFixed(2)} °C`;

    const status = document.getElementById('statusDisplay');
    if (temp > warningThreshold) {
      status.textContent = "🔥 Danger: High Temp!";
      status.classList.add('warning');
      if (!alertActive && userInteracted) {
        alertTone.play().catch(error => {
          console.error("Audio play error:", error);
        });
        alertActive = true;
      }
    } else {
      status.textContent = "✅ Safe";
      status.classList.remove('warning');
      if (alertActive) {
        // Stop sound immediately if previously playing
        alertTone.pause();
        alertTone.currentTime = 0; // Reset to start
        alertActive = false;
      }
    }

    // Update chart
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ":" +
                       now.getMinutes().toString().padStart(2, '0') + ":" +
                       now.getSeconds().toString().padStart(2, '0');

    if (timeLabels.length > 20) {
      timeLabels.shift();
      temperatureData.shift();
    }
    timeLabels.push(timeString);
    temperatureData.push(temp);
    tempChart.update();

    // Store into CSV data
    csvData.push([timeString, temp.toFixed(2)]);

  } catch (error) {
    console.error("Data fetch error:", error);
    document.getElementById('statusDisplay').textContent = "⚠️ Error fetching data";
  }
}

setInterval(updateTemperature, 5000);
updateTemperature();

function downloadCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvData.forEach(rowArray => {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "temperature_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
