
import { Suspense } from 'react';

import LanguageSelector from '../components/languageSelector/languageSelector';
import SiteInformation from '../components/siteInformation/siteInformation';
import DownloadCv from '../components/downloadCv/downloadCv';
import HomePage from '../pages/homePage/homePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../components/loading/loading';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <LanguageSelector />
        <SiteInformation />
        <HomePage />
        <DownloadCv />
      </Suspense>
    </div>
  );
}

export default App;
