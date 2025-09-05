// src/components/Topbar/DateDisplay.jsx


export default function DateDisplay() {
  const today = new Date();
  console.log(today);

  // Day name (e.g. Thursday)
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  console.log(day);

  // Date (e.g. 4 September 2025)
  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  console.log(date);

  return (
    <div className="flex flex-col text-right">
      <span className="text-xs font-semibold text-gray-800">{day}</span>
      <span className="text-xs text-blue-800 text-blue-800">{date}</span>
    </div>
  );
}
