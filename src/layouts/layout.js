import Navbar from "../components/navbar";



const Layout = ({children}) => {
    return (
        <>
         {/* header */}
            <Navbar />
            <main>{children}</main>
            {/*footer  */}
        </>
    )
}

export default Layout;
