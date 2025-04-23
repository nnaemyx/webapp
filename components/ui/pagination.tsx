import React from 'react'


const Pagination = ({numbers, i, position}: {numbers: number[], i: number, position: string}) => {
  return (
    <div className={`${position}`}>
    {numbers.map((number, index)=>{
      return (
        <div className="flex items-center" key={number}>
          <div className={"flex w-[35px] h-[35px]  rounded-full justify-center items-center " + (number < i ? "bg-success400" : 'bg-grey400')}>
            {number}
          </div>
          {index === 0 && <div className="flex w-[40px] h-[2px] bg-grey400 "></div>}
        </div>
      )
    })}
    </div>
  )
}

export default Pagination