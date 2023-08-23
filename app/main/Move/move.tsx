

export default function MoveElem(params: any) {
  const move = params.move;
  const prefix = params.prefix;
  const btnUrls: string[] = [];

  if (!move) {
    return 'I aint got no moves man!';
  } else if (move.type === 'normal') {
    return;
  } else if (move.classic === 'NO INPUT' || move.classic === 'default') {
    // btnUrls.push('blank');
    return;
  } else {
    let curr = move.classic;
    curr = curr.toLowerCase();
    for (let i = 0; i < curr.length; i++) {
      let temp = curr[i];
      if (temp === 'l' || temp === 'm' || temp === 'h') {
        btnUrls.push(curr[i + 1] + curr[i]);
        i++;
      } else if (temp === '|') {
        btnUrls.push('or');
      } else if (temp === '+') {
        btnUrls.push('plus');
      } else if (temp === '_') {
        btnUrls.push('a');
      } else {
        btnUrls.push(temp);
      }
    }
    // console.log(btnUrls);
  }

  return (
    <li key={move.id}>
      <div className="flex max-w-md items-center p-3 bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
        <div
          style={{ backgroundImage: `url("/moves/403.jpg")` }}
          className="h-10 bg-cover bg-center rounded shadow-md"
        ></div>
        <div className="text-center pl-3">
          <p>{move.name}</p>
          <div className="flex px-5 py-1 items-center">
            {btnUrls &&
              btnUrls.map((bUrl, index) => (
                <span
                  key={move.id.toString() + index}
                  className="h-6 w-6 z-10 bg-cover flex"
                  style={{ backgroundImage: `url('/moveBtn/icon_${prefix}${bUrl}.png')` }}>
                </span>
              ))}
          </div>
        </div>
      </div>
    </li>
  )
}