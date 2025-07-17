// =====================================
// 📅 JavaScript Date Operations (Cheat Sheet)
// =====================================

// 🔹 1. Create current date/time
const now = new Date();
console.log('Now:', now);

// 🔹 2. Create from string
const fromStr = new Date("2025-07-11T15:00:00Z");
console.log('From string:', fromStr);

// 🔹 3. Create from components (YYYY, MM (0-indexed), DD, HH, MM, SS)
const fromParts = new Date(2025, 6, 11, 18, 30, 0); // July 11, 2025, 6:30 PM
console.log('From parts:', fromParts);

// 🔹 4. Get parts of the date
console.log('Year:', now.getFullYear());            // 2025
console.log('Month (0-11):', now.getMonth());       // 6 (July)
console.log('Date:', now.getDate());                // 11
console.log('Day of week (0-Sun):', now.getDay());  // 5 (Friday)
console.log('Hours:', now.getHours());              // 21 (or local time)
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

// 🔹 5. Set parts of the date
const future = new Date();
future.setFullYear(2030);
future.setMonth(0); // January
future.setDate(1);
console.log('Modified date:', future);

// 🔹 6. Timestamp (milliseconds since Jan 1, 1970 UTC)
console.log('Timestamp now:', now.getTime());         // e.g., 1757585392000
console.log('Timestamp (static):', Date.now());       // Same as above

// 🔹 7. Compare two dates
const d1 = new Date("2025-01-01");
const d2 = new Date("2026-01-01");

console.log('d1 < d2:', d1 < d2);             // true
console.log('Difference in ms:', d2 - d1);    // milliseconds

// 🔹 8. Add days to a date
function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}
console.log('+10 days:', addDays(now, 10));

// 🔹 9. Subtract days
console.log('-5 days:', addDays(now, -5));

// 🔹 10. Format to ISO string
console.log('toISOString:', now.toISOString()); // "2025-07-11T..."

console.log('toDateString:', now.toDateString()); // "Fri Jul 11 2025"
console.log('toTimeString:', now.toTimeString()); // "18:01:44 GMT+0530..."
console.log('toLocaleString:', now.toLocaleString()); // local date + time
console.log('toLocaleDateString:', now.toLocaleDateString());
console.log('toLocaleTimeString:', now.toLocaleTimeString());

// 🔹 11. Convert string to timestamp
const dateStr = "2025-08-15T09:00:00";
console.log('Parsed timestamp:', Date.parse(dateStr)); // milliseconds
console.log('Parsed date:', new Date(Date.parse(dateStr)));

// 🔹 12. Date difference in days
function diffInDays(a, b) {
  const diff = Math.abs(b - a); // in ms
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log('Days between d1 and d2:', diffInDays(d1, d2)); // ~365

// 🔹 13. Check if valid date
const invalid = new Date("invalid-date");
console.log('Is valid:', !isNaN(invalid)); // false

// 🔹 14. Get UTC equivalents
console.log('UTC Full Year:', now.getUTCFullYear());
console.log('UTC Hours:', now.getUTCHours());

// 🔹 15. Timezone offset (in minutes)
console.log('Timezone offset:', now.getTimezoneOffset()); // e.g., -330 for IST

// 🔹 16. Get start of today
function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
console.log('Start of today:', startOfToday());

// 🔹 17. Get end of today
function endOfToday() {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d;
}
console.log('End of today:', endOfToday());

