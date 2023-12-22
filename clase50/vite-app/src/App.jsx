import SideBar from './components/SideBar'

import './App.css'
import ContentWrapper from './components/ContentWrapper'

function App() {

  return (
    <div id="wrapper">
      <SideBar />

      {/* <!-- Content Wrapper --> */}
      <ContentWrapper />
      {/* <!-- End of Content Wrapper --> */}

    </div>
  )
}

export default App
