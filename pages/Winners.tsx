import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';

export default function Winners() {

    return (
        <div>

            <Hero className='winners-page' img='/image1.png' title='CSO21 Winners' subtitle="Meet the winners of the ClimateScience Olympiad 2021" button='Participate now' />
            <div className='first-winners-section'>
                <div className='heading-title'>
                    <h1>1st Place</h1>
                    <p>Alexandra and Eleonore won the CSO21 with their inspiring proposal on a<br /> <b>‘Global Carbon Tax Scheme’</b></p>
                </div>
                <div className='photos-sec'>

                    <HomeCard image='girl-card.png ' title='Eleonore Vecchioli' description='Aged 14, UK' />
                    <p className='photo-desc'>“The CSO is an unrivalled opportunity to develop your environmental knowledge and meet people with similar interests. It asks you to think beyond the traditional curriculum and gives you a glimpse into the decisions world leaders have to make about the climate.<br /><br />
                    The CSO will stretch your environmental knowledge and enable you to become a better essay writer and scientist.”</p>

                    <HomeCard image='girl-card.png ' title='Alexandra Pilz' description='Aged 14, UK' />
                    <p className='photo-desc'>“Winning the ClimateScience Olympiad was so exciting. We thank ClimateScience for the opportunity and for the amazing community that was created out of the competion.
                    <br/><br/>
                    My advice to anyone applying in 2022 would be to make sure you answer the question and, most importantly, have fun!”</p>
                </div>
            </div>
            <div className='winners-video'>
                <iframe src='https://www.youtube.com/embed/eSAar0cCaTA?autoplay=1&mute=1&controls=0'
                    frameBorder='0'
                    width="800"
                    height="450"
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>


            <div className='winners-second-sec'>
                <h1> Meet the runners up</h1>
                <p>Both our second and third-place teams proposed strong solutions about<br /><b>the ‘Adaptation and Sustainable Development<br />
                    of Southeast Asia’</b></p>


                <div className='final-sec-winners'>
                    <div>
                        <h1>2nd Place</h1>
                        <h2>Ella Marga Contreras</h2>
                        <p>Aged XX, Vietnam</p>

                        <h2>Junsoo Chung</h2>
                        <p>Aged XX, Vietnam</p>

                        <h1>Solution</h1>
                        <p>Adaptation and Sustainable Development<br />of Southeast Asia</p>
                    </div>

                    <div>
                        <h1>3rd Place</h1>
                        <h2>Anais Chen</h2>
                        <p>Aged XX, Canada</p>

                        <h2>Ariane Desrosiers</h2>
                        <p>Aged XX, Hong Kong</p>

                        <h1>Solution</h1>
                        <p>Adaptation and Sustainable Development<br />of Southeast Asia</p>
                    </div>
                </div>

            </div>
            <div className='final-section'>
                <h1>Feeling inspired? Participate now!</h1>
                <p>Work in pairs and compete against youths from around the world to find<br />solutions to climate change.<br /><br />The top 3 teams will win a share of the <b>$15,000</b> prize pool</p>
                <button>Participate now</button>
            </div>
        </div>
    );
}

