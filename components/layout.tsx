import Footer from './footer';
import Navigation from './nav'

interface LayoutProps {
    children: React.ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div  className="container-fluid p-0">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
