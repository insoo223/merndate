import Header from './Header';
import SwipeButtons from './SwipeButtons';

const Layout = ({children}) => {
	return (
		<div>
			<Header/>	
			<main>
				{children}
			</main>
			<SwipeButtons/>	
		</div>
	)
}

export default Layout;
