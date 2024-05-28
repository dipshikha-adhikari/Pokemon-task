import { AppProvider } from '../../context/app-context'
import Logo from '../ui/logo'
import SearchBox from '../ui/search-box'
import ContentLayout from './content-layout'

const Navbar = () => {
    return (
        <AppProvider>
            <nav className="bg-white z-50 shadow-sm relative h-[8vh] sm:h-[10vh] ">
                <ContentLayout
                    style={{
                        display: 'flex ',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo />
                    <SearchBox />
                </ContentLayout>
            </nav>
        </AppProvider>
    )
}

export default Navbar
