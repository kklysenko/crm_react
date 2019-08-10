import React from 'react';

const Header = () =>{
	return (
		<header>
			<a href="" className="logo">taskon</a>
			<ul className="menu">
				<li><a href="">Tasks</a></li>
				<li><a href="">Finances</a></li>
				<li><a href="">Company</a></li>
				<li><a href="">Statistic</a></li>
			</ul>
			<div className="balance">
				<div className="balance-text">Balance</div>
				<div className="balance-value">218 982,90</div>
			</div>
			<div className="nofications">
				<svg width="17px" height="20px" viewBox="0 0 17 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<defs></defs>
					<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Tasklist:-Company-(1200px)" transform="translate(-932.000000, -21.000000)">
							<g id="header">
								<g id="ic_notifications_black_24px" transform="translate(929.000000, 19.000000)">
									<g id="Group">
										<path d="M11.5,22 C12.6,22 13.5,21.1 13.5,20 L9.5,20 C9.5,21.1 10.4,22 11.5,22 L11.5,22 Z M18,16 L18,10.5 C18,7.43 15.87,4.86 13,4.18 L13,3.5 C13,2.67 12.33,2 11.5,2 C10.67,2 10,2.67 10,3.5 L10,4.18 C7.13,4.86 5,7.43 5,10.5 L5,16 L3,18 L3,19 L20,19 L20,18 L18,16 L18,16 Z" id="Shape" fill="#666666"></path>
										<path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z" id="Shape"></path>
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</div>
			<div className="account">
				<div className="account-name">Konstantin Lysenko</div>
			</div>
			<a href="" className="faq">
			<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<defs></defs>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="Tasklist:-Company-(1200px)" transform="translate(-1138.000000, -21.000000)">
						<g id="header">
							<g id="ic_help_outline_24px-copy-3" transform="translate(1136.000000, 19.000000)">
								<path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z" id="Shape"></path>
								<path d="M11,18 L13,18 L13,16 L11,16 L11,18 L11,18 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z M12,6 C9.79,6 8,7.79 8,10 L10,10 C10,8.9 10.9,8 12,8 C13.1,8 14,8.9 14,10 C14,12 11,11.75 11,15 L13,15 C13,12.75 16,12.5 16,10 C16,7.79 14.21,6 12,6 L12,6 Z" id="Shape" fill="#777777"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
			</a>
		</header>
	);
}

export default Header;