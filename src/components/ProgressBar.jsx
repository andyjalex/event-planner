import "../index.css";
const ProgressBar = (props) => {
  const today = new Date();
  console.log(today);

  const computeProgress = () => {
    const now = new Date();

    // Build start/end Date objects from date + time strings
    const from = new Date(`${props.date}T${props.timeFrom}:00`);
    const to = new Date(`${props.date}T${props.timeTo}:00`);
  
    console.log(props);

    console.log(to)
    let progress = 0;

    // Before event starts → 0%
    if (now < from) {
      progress = 0;
    }
    // After event ends → 100%
    else if (now > to) {
      progress = 100;
    }
    // During event → percentage of elapsed time
    else {
      console.log(to)
      const total = to - from;       // ms between start and end
      const elapsed = now - from;    // ms since start
      progress = (elapsed / total) * 100;
    }
  
    return progress;
  
  };

  return (
    <div className="relative flex bg-blue-500 h-8">
      <div
        className="absolute inset-y-0 left-0 bg-black z-10"
        style={{ width: `${computeProgress()}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
