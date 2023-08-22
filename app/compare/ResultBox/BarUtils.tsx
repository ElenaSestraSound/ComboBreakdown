export const barLength = 50;
export const ticksArray = [...Array(barLength + 1).keys()];

export const barColors = {
  strokeColor: '#000000',
  startupFill: '#0AB48C',
  activeFill: '#D71E5A',
  multiActiveFill: '#E69623',
  recoveryFill: '#0A57C1',
  emptyFill: '#333333'
};

export const barMargin = {
  top: -7,
  right: 0,
  left: -60,
  bottom: 0,
};

export function parseActive (activeStr: string) {
  let res = 0;
  if (activeStr.includes(',')) {
    const resArr: number[] = [];
    const activeTemp = activeStr.split(',');
    activeTemp.map((tmpStr) => {
      resArr.push(getActiveValue(tmpStr));
    });
    return resArr;
  }
  else {
    const active = getActiveValue(activeStr);
    res = Number.isNaN(active) ? 0 : active;
  }
  return res;
}

export function getActiveValue (activeStr: string) {
  let res = 0;
  if (activeStr.includes('-')) {
    res = parseInt(activeStr.split('-')[1]);
  } else {
    res = parseInt(activeStr);
  }
  return res;
}

export function parseActiveValue (activeStr: string) {
  const resArr: number[] = [];
  if (activeStr.includes(',')) {
    const activeTemp = activeStr.split(',');
    activeTemp.map((tmpStr) => {
      if (tmpStr.includes('-')) {
        resArr.push(getActiveDuration(tmpStr));
      } else {
        resArr.push(1);
      }
    });
  }
  return resArr;
}

export function getActiveDuration (activeStr: string) {
  let res = 0;
  if (activeStr.includes('-')) {
    res = parseInt(activeStr.split('-')[1]) - parseInt(activeStr.split('-')[0]);
  } else {
    res = parseInt(activeStr);
  }
  return res;
}

export function getRecoveryValue (recovery: number | undefined, activeLast: number) {
  const recoveryTemp = (recovery && recovery) ?? 0;
  return (recoveryTemp - activeLast);
}