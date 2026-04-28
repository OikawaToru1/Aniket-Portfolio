import {Navbar,Footer} from '../index'
export function Layout({children}:{children:React.ReactNode}){
    return(<>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </>)
}