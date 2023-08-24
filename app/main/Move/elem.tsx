import { Move } from '@/utils/types';

export default function Elem (params: any) {
  let btnUrls: string[] | undefined = [];
  const { move, controlGen, controlMake } = params;
  if (!move || move.type === 'normal' || move.type === 'default' ||
    !Object.hasOwn(move, controlGen) || move[controlGen] === 'NO INPUT' || move[controlGen] === 'default') {
    return;
  } else if (controlGen === 'classic') {
    btnUrls = getClassicUrl(move);
  } else if (controlGen === 'modern') {
    btnUrls = getModernUrl(move);
  }

  return (
    <div className="flex lg:w-96 justify-center items-center pt-2 pb-2 px-3 bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
      <div className="px-3 text-center">
        <p>{move.name}</p>
        <div className="flex flex-row py-1 justify-center items-center">
          {btnUrls &&
            btnUrls.map((bUrl, index) => (
              <span
                key={index}
                className="flex  h-6 w-6 z-10 p-0 mr-2 bg-cover bg-center"
                style={{ backgroundImage: `url('/movebtn/${controlMake}/icon_${bUrl}.png')` }}>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

function getModernUrl (move: Move) {
  let btnUrls: string[] = [];
  if (move.modern === 'NO INPUT' || move.modern === 'default' || !move.modern) {
    return;
  }
  for (let i = 0; i < move.modern.length; i++) {
    let temp = move.modern[i];
    let tempMove = move.modern;
    console.log('gogogo', tempMove);
    temp = temp.toLowerCase();
    tempMove = tempMove.toLowerCase();
    if (temp === '+') {
      btnUrls.push('plus');
    } else if (temp === '|') {
      btnUrls.push('or');
    } else if (temp === '*') {
      btnUrls.push('all');
    } else if (temp === '_') {
      btnUrls.push('a');
    } else if (tempMove.slice(i, i + 4) === 'auto') {
      btnUrls.push('auto');
      i += 4;
    } else if (tempMove.slice(i, i + 2) === 'lc') {
      btnUrls.push('lc');
      i++;
    } else if (temp === 'd' || temp === 's' || temp === 'r') {
      btnUrls.push(tempMove[i] + tempMove[i + 1]);
      i++;
    } else if (temp === 'l' || temp === 'm' || temp === 'h' || temp === 'c' || !isNaN(parseFloat(temp))) {
      btnUrls.push(temp);
    } else {
      console.log('end of line', temp);
    }
  }
  return btnUrls;
}

function getClassicUrl (move: Move) {
  let btnUrls: string[] = [];
  for (let i = 0; i < move.classic.length; i++) {
    if (move.classic === 'NO INPUT' || move.classic === 'default') {
      return;
    }
    let temp = move.classic[i];
    temp = temp.toLowerCase();
    if (temp === 'l' || temp === 'm' || temp === 'h') {
      btnUrls.push(move.classic[i + 1] + move.classic[i]);
      i++;
    } else if (temp === '|') {
      btnUrls.push('or');
    } else if (temp === '+') {
      btnUrls.push('plus');
    } else if (temp === '_') {
      btnUrls.push('a');
    } else if (temp === 'p' || temp === 'k' || !isNaN(parseFloat(temp))) {
      btnUrls.push(move.classic[i]);
    } else {
      console.log('classic last', temp);
    }
  }
  return btnUrls;
}