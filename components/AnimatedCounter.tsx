'use client';
import CountUp from 'react-countup'
const AnimatedCounter = ({amount} : {amount:number}) => {
  return (
    <div>
        <CountUp
         duration={1.79}
         decimals={2}
         decimal='.'
         end={amount}/>
    </div>
  )
}

export default AnimatedCounter