import type { NextPage } from 'next'
import Hero from '../components/Hero'
import MidCard from '../components/MidCard'
import GridCard from '../components/GridCards'
import HomeCard from '../components/HomeCard'
import Link from 'next/link'
import Content from '../components/ViewMore'
import Frame13 from '../components/Frame13'
import ReversedGridSCard from '../components/ReversedGridSCard'

import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import AOS from 'aos';
const Home: NextPage = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <>
      <Hero img='/image1.png' title='ClimateScience Olympiad2022' tag='AGES <16 17-20 & 21-25,$15000 PRIZE POOL' subtitle='Who is ClimateScience?,Visit our main website to find out more.'
        button='Participate now' />
      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='section-1'>
        <h1>Finding the solutions to climate change</h1>
        <p>The ClimateScience Olympiad is a global problem-solving competition <br /> that encourages and empowers young people to find solutions <br /> to the effects and causes of climate change.
        </p>
        <iframe src='https://www.youtube.com/embed/eSAar0cCaTA?autoplay=1&mute=0&controls=0'
          frameBorder='0'
          width="800"
          height="450"
          allowFullScreen
          title='video'
        />
      </div>

      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='section-2'>
        <MidCard
          logo='image2.png ' title='Requirements'
          text='Free to enter  Age groups: <16, 17-20, 21-25'
          text2=' Participate solo or in a team of two' />
        <MidCard
          logo='image3.png '
          title='Prizes'
          text='1st wins $5,000 ??? 2nd wins $3,000 3rd wins $2,000 ??? 4-6th win $1,000 7-10th win $500 '
          text2='Opportunity to speak at COP27 (TBC)'
        />
      </div>


      <GridCard


        className='section-3'
        logo='image4.png'
        title='1.Qualifiers'
        tag="ONLINE / ON PAPER, Online"
        text2='The qualifier round is a 20-minute exam. You can do this online right now later or as a student at your school The exam can be taken on your computer or smartphone or on paper if you participate in a school., Individual schools will be invited to register their events. Those events allow schools to host wafflers for all participants at once. Upon verificaton schools can also get printable versions of the sheets and conduct exams in paper form., Each person can participate up to 4 times. If a participant is found to have participated more than 4 times they will be disqualified., All participants will receive a certificate and top participants a speciaL honour. 
        Registration for CS022 opening soon.'
        text='???? Register until 10th Aug 2022.' />
      <ReversedGridSCard logo='image5.png'
        title='2.Quarter Finals'
        tag="Top 50, Online"
        text="???? Feb-Aug 2022. "
        text2='The best 10% of all qualifier participants advance to the Quarter Finals.
        Quarter Finals follow the same quick-question format that Qualifiers follow. '/>


      <GridCard
        logo='image6.png'
        title='3.Semi-Finals'
        tag="Top 50, Online"
        text="???? Mar-Sep 2022."
        text2="Congratulations! You've demonstrated advanced knowledge on climate solutions. Now ifs time to put this to good use and start solving some real problems., 
        In the Semi-Final you choose one of three problem statements to respond no To help you prepare you are told the topics 10 days before the event but the exact problem statement is only revealed at the start of the actual qualifier event., 
        Then you have 3 hours to research and write essay responses to questions related to the problem statement. ClimateScience will score each team's solution. "
        list="Learn more ,
         semr-Finals structure and rules ,
         Example Semi-Finals problem set ,
         rips and scoring rubric for Semi-Finalists ,
         FAQs
        "
      />
      <ReversedGridSCard logo='image7.png'
        title='4.The Final'
        text="???? October 2022."
        tag="Top 50, Online"
        text2="If you make it to the final you have essentially won already. Why?, 
        Every finalist wit be awarded a Bronze Medal. the top 25 and top 10 will be awarded a Silver and Gold Medal respectively. The top teams split the prize pool of $15000 (USD)., 
        Finals require a written exam a presentation and an Interview. As in 2021 we hope to conduct the winners ceremony at the United Nations' Climate Summit (COP) and give the top teams the opportunity to present their solutions on a world stage." />


      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"

        className='guide-div'>
        <h1>Still not sure what to expect?</h1>
        <p className='original-text'>Visit our participant advice page which has been <br /> specifically designed to help you on your journey <br /> through the qualifier and quarter finals.</p>

        <button>Participant Guide</button>
      </div>
      <Frame13 />

      <p className='FAQ'>Frequently asked questions</p>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='section-4'>
        <h1>Register now!</h1>
        <p className='reg-text'>Work on your own, or in pairs, and compete against youths from around the world to find solutions to climate change.
          <br /><br />The top 10 teams will win a share of the $15,000 prize pool</p>
        <button>Participate now</button>
      </div>

      <img
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        src="image8.png" alt="" className='lowerhero' />
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='section-5'>
        <h1>ClimateScience 2021 Winner</h1>
        <p className='awards-text'>Watch the 2021 ClimateScience Olympiad Awards Ceremony here</p>
        <button>Meet the CSO21 Winners</button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='section-6'>
        <h1>CS022 Judges</h1>
        <p className='judges-text'>Our judges are trusted members of the climate science industry.<br />
          Interested in becoming a CSO judge? Apply here.</p>
        <div className='img-grid'>
          {[...Array(4)].map((e, i) => <HomeCard key={i} image='girl-card.png ' title='Sophie Gallois' description='Former Deputy Exec. Directorat Unicef UK' />)}
        </div>
        <button >Meet the CSO team</button>
        <h1 className='our-partners'>Our partners</h1>

      </div>
      <p
        className='judges-text2'> Want to become a CSO partner?  <Link href='#'>Apply here.</Link> </p>
      <Content />

    </>
  )
}

export default Home
