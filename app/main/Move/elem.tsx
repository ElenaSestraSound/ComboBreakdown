

export default function Elem(params: any) {
  const btnUrls: string[] = [];
  const { move, controlGen, controlMake} = params;
  if (!move || move.type === 'normal' || move.type === 'default' ||
    !Object.hasOwn(move, controlGen) || move[controlGen] === 'NO INPUT' || move[controlGen] === 'default') {
    return;
  } else {
    for (let i = 0; i < move[controlGen].length; i++) {
      if (move[controlGen] === 'NO INPUT' || move[controlGen] === 'default') {
        return;
      }
      let temp = move[controlGen][i];
      temp = temp.toLowerCase();
      if (temp === 'l' || temp === 'm' || temp === 'h') {
        btnUrls.push(move[controlGen][i + 1] + move[controlGen][i]);
        i++;
      } else if (temp === '|') {
        btnUrls.push('or');
      } else if (temp === '+') {
        btnUrls.push('plus');
      } else if (temp === '_') {
        btnUrls.push('a');
      } else if (temp === 'p' || temp === 'k' || Number.isInteger(temp)) {
        btnUrls.push(move.classic[i]);
      } else {
        console.log(temp);
      }
    }
    // console.log('console something ', btnUrls);
    // console.log('console something ', move.name);
  }

  console.log(move.name);
  

  return (                             
    <div className="flex w-96 items-center p-3 bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
      <div
        style={{ backgroundImage: `url("/moves/101.jpg")` }}
        className="h-10 w-16 bg-cover bg-center rounded shadow-md">        
      </div>
        <div className="w-70 px-5">
          <p>{move.name}</p>
            <div className="flex flex-row py-1">        
              {btnUrls &&
                btnUrls.map((bUrl, index) => (
                <span
                key={index}
                className="h-6 w-6 z-10 p-0 mr-1 bg-cover flex"
                style={{ backgroundImage: `url('/moveBtn/${controlMake}/icon_${bUrl}.png')` }}>
                </span>
              ))}  
            </div>
          </div>
        </div>            
    )
  }