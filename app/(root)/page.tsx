import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:"Vansh",lastName:"Sahay",email:"sahayvansh24@gmail.com"};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={4989.25}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance:1200},{currentBalance:1600}]}
      />
    </section>
  )
}

export default Home