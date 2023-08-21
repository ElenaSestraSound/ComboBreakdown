

export default function MoveElem(params:any) {
  const move = params.move;
  if (!move) return 'I aint got no moves man!';

  return (
    <li key={move.id}>
      <div className="flex w-96 items-center p-3 bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
        <div
          style={{ backgroundImage: `url("/moves/101.jpg")` }}
          className="h-10 w-16 bg-cover bg-center rounded shadow-md"
        ></div>
        <div className="text-center pl-3">
          <p>{move.name}</p>
          <div className="flex px-5 py-1">
            <span>
              <div
                className="h-6 w-6 z-10 bg-cover"
                style={{ backgroundImage: `url("/moveBtn/icon_${move.classic[1] + move.classic[0]}.png")` }}
              />
            </span>
            <span className="px-2">{move.classic[0]}</span>
          </div>
        </div>
      </div>
    </li >
  )
}