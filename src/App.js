import './App.css';
import logo from './assert/logo.png';
import photo from './assert/photo.png';
import machine from './assert/machine.png';
import award from './assert/award.png';
function App() {
	return (
		<div className="App">
			<div className="container product-page">
				<nav className="navbar nav_bar_unfixed">
					<div className="navbar-content">
						<a href="#">
							<img className="ab" src={logo}></img>
						</a>
					</div>
				</nav>
				<div className="hero-section">
					<div className="hero-section-container">
						<div className="hero-section-img" data-aos="zoom-in">
							<div className=" gatsby-image-wrapper" >
								<div aria-hidden="true" ></div>
								<img src={photo} alt=""></img>
							</div>
						</div>
						<div className="hero-section-content">
							<h2 className="h2"></h2>
							<h1 className="h1"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
							</h1>
							<span>    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</span><br></br>
							<span>" C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy."</span>
						</div>
					</div>
				</div>
				<div className="section section-bg-white">
					<div className="section-container section-img-container section-img-container-right">
						<div className="section-img" data-aos="fade-right">
							<div className=" gatsby-image-wrapper" >
								<div aria-hidden="true"></div>
								<img src={award} alt=""></img>
							</div>
						</div>
						<div className="section-content-container">
							<div className="section-content">
								<span>
									Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="section-container section-img-container">
						<div className="section-img" data-aos="fade-left">
							<div className=" gatsby-image-wrapper">
								<div aria-hidden="true"></div>
								<img src={machine} alt=""></img>
							</div>
						</div>
						<div className="section-content-container">
							<div className="section-content">
								<h2 className="h2">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
								</h2>
								<span>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</span>
							</div>
						</div>
					</div>
				</div>
				<footer class="footer">
					<div className="foot">
				<h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
				</div>
					<div className="footer-content">
						<div className="link-column">
							<a aria-current="page" class="footer-link" href="#">CHEMICALS & PROCESS</a>
							<a href="#" className="footer-link">POWER</a>
							<a href="#" className="footer-link">WATER & WASTE WATER </a>
							<a href="#" className="footer-link">OILS & GAS</a>
							<a href="#" className="footer-link">PHARMA </a>
							<a href="#" className="footer-link">SUGARS & DISTILLERIES</a>
						</div>
						<div className="link-column">
							<a className="footer-link" href="#">PAPER & PULP</a>
							<a className="footer-link" href="#">MARINE & DEFENCE</a>
							<a className="footer-link" href="#">METAL & MINING</a>
							<a className="footer-link" href="#">HVAC</a>
						</div>
						<div className="link-column">
							<a className="footer-link" href="/about/">FOOD & BEVERAGE </a>
							<a className="footer-link" > PETROCHEMICAL & REFINERIES </a>
							<a className="footer-link" >SOLAR</a>
							<a className="footer-link" > BUILDING</a>
						</div>
						<div className="link-column">
							<a className="footer-link" target="_blank" rel="noopener noreferrer">FIRE</a>
							<a className="footer-link" >FIGHTING</a>
							<a className="footer-link" target="_blank" rel="noopener noreferrer" >AGRICULTURE & RESIDENTIAL</a>
						</div>
						
					</div>
					<div class="cal-footer-bottom-wrapper">
			<div class="copyright-content">
				<div>TollFree 1800 200 1234</div>
				<a href="#" class="copy-link">www.facebook.com/cripumps</a>
				<a href="#" class="copy-link">www.crigroups.com</a>
			</div>
			</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
