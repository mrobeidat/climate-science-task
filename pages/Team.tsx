import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';

export default function Team() {
    return (
        <div>

            <Hero img='/image1.png' title='Meet the team' subtitle='The CSO team comprises of passionate , volunteers and judges from all around the world.'

                button="Participate now"
            // text='Who is ClimateScience? , Visit our main website to find out more.'
            />
            <div className='grid5'>
                <div className='text-team1'>
                    <h1>CSO22 Finals Judges</h1>
                    <p className='text'>Our judges are trusted members of the climate science industry.<br />
                        Interested in becoming a CSO judge? Apply here.</p>
                </div>
                <div className='img-grid-team'>
                    {[...Array(8)].map((e, i) => <HomeCard key={i} image='girl-card.png ' title='Sophie Gallois' description='Former Deputy Exec. Directorat Unicef UK' />)}
                </div>
            </div>

            <div className='grid6'>
                <div className='text-team2'>
                <h1>CSO22 Pre-final Judges</h1>
                <p>Our internal team of experts judge the rounds before the finals</p>
                </div>
                <div className='img-grid-team2'>
                    {[...Array(8)].map((e, i) => <HomeCard key={i} image='girl-card.png ' title='Sophie Gallois' description='Former Deputy Exec. Directorat Unicef UK' />)}
                </div>

            </div>

            <div className='text-tata'>
                <h1>Apply to become a judge</h1>
                <p>We’re looking for industry professionals to judge the ClimateScience<br/>Olympiad 2022 proposals. If you would like to apply, please fill out our<br/>form to register your interest.</p>
                <button>Apply to become a judge</button>
                </div>
                
                <div className='text-team2'>
                <h1>The ClimateScience Olympiad team</h1>
                <p>Our internal team of experts judge the rounds before the finals</p>
                </div>
                <div className='img-grid-team2'>
                    {[...Array(16)].map((e, i) => <HomeCard key={i} image='girl-card.png ' title='Sophie Gallois' description='Former Deputy Exec. Directorat Unicef UK' />)}
                </div>
        </div>
    );
}