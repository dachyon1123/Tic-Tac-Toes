import Square from "./Square"

export default function Board() {
  const squares: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='border-black border-2 grid grid-cols-3 grid-rows-3'>
      {squares.map(() => (
        <Square />
      ))}
    </div>
  )
}