type CalcBusyness = (workloadTotal: number) => 'tooBusy' | 'comfortable';

export const calcBusyness: CalcBusyness = workloadTotal => {
  const busyLevel = {
    tooBusy: 15,
    // comfortable: 6,
  };
  if (workloadTotal > busyLevel.tooBusy) {
    return 'tooBusy';
  } else {
    return 'comfortable';
  }
};
