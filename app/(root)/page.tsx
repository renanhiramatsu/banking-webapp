import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Renan' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Bem-vindo"
            user={loggedIn?.firstName || 'Convidado'}
            subtext="Acesse sua conta e gerencie seu dindin."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          
          
          />

        </header>

      </div>
    
    </section>
  )
}

export default Home