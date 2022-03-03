import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MidCard from '../components/MidCard'
import GridCard from '../components/GridCards'
import HomeCard from '../components/HomeCard'
import Link from 'next/link'
import Content from '../components/ViewMore'
import Footer from '../components/Footer'
import Frame13 from '../components/Frame13'
import Partnerlogo from '../components/Partnerlogo'

const Home: NextPage = () => {
  return (
    <>
      <Hero img='/image1.png' title='ClimateScience Olympiad2022' tag='AGES <16 17-20 & 21-25,$15000 PRIZE POOL' subtitle='Who is ClimateScience?,Visit our main website to find out more.'
        button='Participate now'/>
      <div className='grid'>
        <h1>Finding the solutions to climate change</h1>
        <p>The ClimateScience Olympiad is a global problem-solving competition <br /> that encourages and empowers young people to find solutions <br /> to the effects and causes of climate change.
        </p>
        <iframe src='https://www.youtube.com/embed/eSAar0cCaTA?autoplay=1&mute=0&controls=0'
          frameBorder='0'
          width="800"
          height="450"
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>

      <div className='grid2'>
        <MidCard
          logo='image2.png ' title='Requirements'
          text='Free to enter  Age groups: <16, 17-20, 21-25'
          text2=' Participate solo or in a team of two' />
        <MidCard
          logo='image3.png '
          title='Prizes'
          text='1st wins $5,000 • 2nd wins $3,000 3rd wins $2,000 • 4-6th win $1,000 7-10th win $500 '
          text2='Opportunity to speak at COP27 (TBC)'
        />
      </div>

      <div className='cards'>
        <GridCard
          className='gridCards'
          logo='image4.png'
          title='Qualifiers'
          tag="ONLINE / ON PAPER, Online"
          text2='The qualifier round is a 20-minute exam. You can do this online right now, later, or as a student at your schooL The exam can be taken on your computer or smartphone, or on paper if you participate in a schooL Individual schools will be invited to register their events. Those events allow schools to host wafflers for all participants at once. Upon verificaton, schools can also get printable versions of the sheets and conduct exams in paper form. Each person can participate up to 4 times. If a participant is found to have participated more than 4 times they will be disqualified. All participants will receive a certificate, and top participants a speciaL honour. 
        Registration for CS022 opening soon.'
          text='Register until 10th Aug 2022.' />
        <GridCard
          logo='image5.png'
          title='Quarter Finals'
          tag="Top 50, Online"
          text="Feb-Aug 2022. "
          text2='The best 10% of all qualifier participants advance to the Quarter Finals.
        Quarter Finals follow the same quick-question format that Qualifiers follow. ' />
        <GridCard
          logo='image6.png'
          title='Semi-Finals'
          tag="Top 50, Online"
          text="Mar-Sep 2022."
          text2="Congratulations! You've demonstrated advanced knowledge on climate solutions. Now ifs time to put this to good use and start solving some real problems. 
        In the Semi-Final, you choose one of three problem statements to respond no To help you prepare, you are told the topics 10 days before the event, but the exact problem statement is only revealed at the start of the actual qualifier event. 
        Then you have 3 hours to research and write essay responses to questions related to the problem statement. ClimateScience will score each team's solution. "
          list="Learn more 
        • semr-Finals structure and rules 
        • Example Semi-Finals problem set 
        • rips and scoring rubric for Semi-Finalists 
        • FAQs 
        "
        />
        <GridCard
          logo='image7.png'
          title='The Final'
          text="October 2022."
          tag="Top 50, Online"
          text2="If you make it to the final, you have essentially won already. Why? 
        Every finalist wit be awarded a Bronze Medal., the top 25 and top 10 will be awarded a Silver and Gold Medal, respectively. The top teams split the prize pool of $15,000 (USD). 
        Finals require a written exam, a presentation, and an Interview. As in 2021, we hope to conduct the winners ceremony at the United Nations' Climate Summit (COP) and give the top teams the opportunity to present their solutions on a world stage."
        />
      </div>

      <div className='guide-div'>
        <h1 className='text-el1'>Still not sure what to expect?</h1>
        <p>Visit our participant advice page which has been <br /> specifically designed to help you on your journey <br /> through the qualifier and quarter finals.</p>

      </div>
      <button>Participant Guide</button>
      
      <Frame13 />

      <p className='FAQ'>Frequently asked questions</p>
      <div className='grid3'>
        <h1>Register now!</h1>
        <p className='reg-text'>Work on your own, or in pairs, and compete against youths from around the world to find solutions to climate change.
          <br /><br />The top 10 teams will win a share of the $15,000 prize pool</p>
        <button className='btn-particibate'>Participate now</button>
      </div>

      <img src="image8.png" alt="" />
      <div className='winners-sec'>
        <h1>ClimateScience 2021 Winner</h1>
        <p className='awards-text'>Watch the 2021 ClimateScience Olympiad Awards Ceremony here</p>
        <button className='btn-winners'>Meet the CSO21 Winners</button>
      </div>

      <div className='grid4'>
        <h1>CS022 Judges</h1>
        <p className='judges-text'>Our judges are trusted members of the climate science industry.<br />
          Interested in becoming a CSO judge? Apply here.</p>
        <div className='img-grid'>
          {[...Array(4)].map((e, i) => <HomeCard key={i} image='girl-card.png ' title='Sophie Gallois' description='Former Deputy Exec. Directorat Unicef UK' />)}
        </div>
        <button className='btn-particibate'>Meet the CSO team</button>
      </div>
      <div className='grid4' >
        <h1>Our partners</h1>
        <div className='partnerlogo'>
          {[...Array(4)].map((e, i) => <Partnerlogo className='partnerlogo' key={i} Partnerlogo='partnerLogo.png ' />)}
        </div>
        <p> Want to become a CSO partner?  <Link href='#'>Apply here.</Link> </p>
      </div>
      <Content />
    </>
  )
}

export default Home
