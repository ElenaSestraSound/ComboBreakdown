import { Move } from '@/utils/types';

export default function Elem (params: any) {
  const { move, controlGen, controlMake } = params;
  if (!(controlGen in move) || !move || move.type === 'normal' || move.type === 'default' || move[controlGen] === 'NO INPUT' || move[controlGen] === 'default') {
    return;
  }
  let btnUrls: string[] | undefined | null = [];
  if (controlGen === 'classic') {
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
  let tempUrls: string[] = [];
  if ( !('modern' in move) || !move.modern || move.modern === 'NO INPUT' || move.modern === 'default' ) {
    return null;
  }
  for (let i = 0; i < move.modern.length; i++) {
    let tempMove = move.modern;
    tempMove = tempMove.toLowerCase();
    let temp = tempMove[i];
    if (temp === '+') {
      tempUrls.push('plus');
    } else if (temp === '|') {
      tempUrls.push('or');
    } else if (temp === '*') {
      tempUrls.push('all');
    } else if (temp === '_') {
      tempUrls.push('a');
    } else if (tempMove.slice(i, i + 4) === 'auto') {
      tempUrls.push('auto');
      i += 4;
    } else if (tempMove.slice(i, i + 2) === 'lc') {
      tempUrls.push('lc');
      i++;
    } else if (temp === 'd' || temp === 's' || temp === 'r') {
      tempUrls.push(tempMove[i] + tempMove[i + 1]);
      i++;
    } else if (temp === 'l' || temp === 'm' || temp === 'h' || temp === 'c' || !isNaN(parseFloat(temp))) {
      tempUrls.push(temp);
    } 
  }
  return tempUrls;
}

function getClassicUrl (move: Move) {
  let tempUrls: string[] = [];
  if (!move.classic || move.classic === 'NO INPUT' || move.classic === 'default') {
    return null;
  }
  for (let i = 0; i < move.classic.length; i++) {
    let tempMove = move.classic;
    tempMove = tempMove.toLowerCase();
    let temp = tempMove[i];
    if (temp === 'l' || temp === 'm' || temp === 'h') {
      tempUrls.push(tempMove[i + 1] + tempMove[i]);
      i++;
    } else if (temp === '|') {
      tempUrls.push('or');
    } else if (temp === '+') {
      tempUrls.push('plus');
    } else if (temp === '_') {
      tempUrls.push('a');
    } else if (temp === 'p' || temp === 'k' || !isNaN(parseFloat(temp))) {
      tempUrls.push(tempMove[i]);
    }
  }
  return tempUrls;
}