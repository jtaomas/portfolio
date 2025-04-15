import Link from './link.jsx'

function App() {
    return(
        <>  
            <div className='hero'>
                <h2>Hey there! 👋</h2>
                <h1>My name's Thomas.</h1>
                <h2 id='hero-sub'>And I'm learning <p>fullstack development</p></h2>
            </div>
            

            <div className='links'>
                <div className='link'>
                    <Link prop={{heading:'LinkedIn', description:'Connect with me via LinkedIn. Displaying my prior work experience and portfolio, and CV.', link:'https://www.linkedin.com/in/thomas-l-195847312/'}}
                    />
                </div>
                <div className='link'>
                    <Link prop={{heading:'Github', description:'Browse my code repositories and projects. See what I\'ve been building and contributing to.', link:'https://github.com/jtaomas'}}
                    />
                </div>
                <div className='link'>
                    <Link prop={{heading:'Spotify', description:'Check out what I\'m listening to right now on Spotify, my profile, preferences and playlists.', link:'https://open.spotify.com/user/sts3yjry7hq7qvcyja89vtk0y?si=172c599fbc5c46bd'}}
                    />
                </div>
                <div className='link'>
                    <Link prop={{heading:'Contact Me', description:'Click this link to reach out via mail to my gmail address', link:"mailto:toggled@duck.com"}}
                    />
                </div>
            </div>
        </>
    )
}

export default App