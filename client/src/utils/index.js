export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const Hours = difference / (1000 * 3600);
    const remainingDays = Hours / 24; 
    const remainingHours = Hours % 24;

    return [remainingDays.toFixed(0), remainingHours.toFixed(0)];
  };

export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };