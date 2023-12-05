import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className='App'>
    <ParticlesBg className="particles" color="#FFFFFF" num={200} type="cobweb" bg={true} />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
    {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
