import Header from './Header';
import AncTmpDrw from './AncTmpDrw';

const Layout = ({children}) => {
	return (
		<div>
			<Header/>	
			<AncTmpDrw/>
			<main>
				{children}
			</main>
			{/* <SwipeButtons/>	 */}
		</div>
	)
}

export default Layout;
