import * as FaIcons from 'react-icons/fa'
import Author from './Author/Author'
import Content from './Content/Content'
function Profile() {
    return(
        // <!-- main content -->
        <main className="main">
            <div className="main__author" data-bg="assets/img/authors/banner.jpg"></div>
            <div className="container">
                <div className="row row--grid">
                    {/* Author Start */}
                    <Author/>
                    {/* Author End */}
    
                    {/* Content Start */}
                    <Content />
                    {/* Content End */}
                </div>
            </div>					
                      
    
        </main>
        // <!-- end main content -->
    )
}

export default Profile