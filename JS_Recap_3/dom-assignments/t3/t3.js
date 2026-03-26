const target = document.getElementById('target');

const browserName = navigator.appName;
const userAgent = navigator.userAgent;

let browserVersion = 'Unknown';
const versionMatch = userAgent.match(/(Chrome|Firefox|Safari)\/(\d+)/);
if (versionMatch) {
  browserVersion = versionMatch[2];
}

let os = 'Unknown OS';
if (userAgent.includes('Win')) os = 'Windows';
else if (userAgent.includes('Mac')) os = 'macOS';
else if (userAgent.includes('Linux')) os = 'Linux';
else if (userAgent.includes('Android')) os = 'Android';
else if (userAgent.includes('iPhone')) os = 'iOS';

const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidht;
const availHeight = screen.availHeight;

const now = new Date();

const dateFI = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const timeFI = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
    <p><strong>Browser:</strong> ${browserName} (${browserVersion})</p>
    <p><strong>Operating System:</strong> ${os}</p>
    <p><strong>Screen Size:</strong>${screenWidth} x ${screenHeight}</p>
    <p><strong>Available Space:</strong>${availWidth} x ${availHeight}</p>
    <p><strong>Date:</strong>${dateFI}</p>
    <p><strong>Time:</strong>${timeFI}</p>`;
