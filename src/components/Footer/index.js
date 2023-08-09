import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
           
            <a href='https://github.com/cuevasgaston'>
                <img src="/img/github.png" alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/eduardo-gaston-cuevas/'>
                <img src="/img/linkedin.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Designed by Eduardo Cuevas</strong>
    </footer>
}

export default Footer