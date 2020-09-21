import { getISODay } from 'date-fns';

type PrizeReckoner = (weeklyAccomplishment: number) => number;

export const prizeReckoner: PrizeReckoner = weeklyAccomplishment => {
  const dayOfTheWeek = getISODay(new Date());
  const dailyGoal = {
    hard: dayOfTheWeek * 3,
    normal: dayOfTheWeek * 2,
    easy: dayOfTheWeek * 1,
  };
  if (weeklyAccomplishment > dailyGoal.hard) {
    return 3;
  } else if (weeklyAccomplishment > dailyGoal.normal) {
    return 2;
  } else if (weeklyAccomplishment > dailyGoal.easy) {
    return 1;
  } else {
    return 0;
  }
};
