import { AppProvider } from '../../context/app-context'
import Logo from '../ui/logo'
import SearchBox from '../ui/search-box'
import ContentLayout from './content-layout'

const Navbar = () => {
    return (
        <AppProvider>
            <nav className="bg-white z-50 shadow-sm relative py-sm bg-primary top-0">
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
