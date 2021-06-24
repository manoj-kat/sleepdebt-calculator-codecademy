const getSleepHours=day=>{
  switch(day){
    case 'monday':
    return 8;
    case 'tuesday':
    return 12;
    case 'wednesday':
    return 7;
    case 'thursday':
    return 8;
    case 'friday':
    return 10;
    case 'saturday':
    return 7;
    case 'sunday':
    return 8;
    default :
    return 'enter a valid day';
  }
};
//console.log(getSleepHours('friday'));
const getActualSleepHours= () =>
  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday');
/*const getIdealSleepHours=()=>{
  const idealHours
}*/
//console.log(getActualSleepHours());
const getIdealSleepHours=()=>{
  const idealHours=8;
  return idealHours*7;
}
//console.log(getIdealSleepHours());
const calculateSleepDebt=()=>{
  const actualSleepHours=getActualSleepHours();
  //console.log(actualSleepHours);
  const idealSleepHours=getIdealSleepHours();
  if(actualSleepHours===idealSleepHours){
    return 'you have got the perfect amount of sleep';
  }else if(actualSleepHours < idealSleepHours){
    return 'you should get ' +(idealSleepHours - actualSleepHours)+' hrs rest';
  }else{ return 'you had '+(actualSleepHours-idealSleepHours)+'hrs more rest';}
};
console.log(calculateSleepDebt());
//console.log(getActualSleepHours(60));










