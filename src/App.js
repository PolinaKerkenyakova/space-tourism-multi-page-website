import './App.css';
import LargeButton from './components/NavigationButtons/LargeButton';
import PrimaryNavigation from './components/Navigation/PrimaryNavigation';
import TabNavigation from './components/Navigation/TabNavigation';
import DotNavigation from './components/Navigation/DotNavigation';
import NumberNavigation from './components/Navigation/NumberNavigation';

function App() {
  return (
    <>
      <LargeButton classes={['uppercase', 'ff-serif', 'fs-600', 'text-dark', 'bg-white', 'uppercase']} />
      <PrimaryNavigation />
      <TabNavigation />
      <DotNavigation />
      <NumberNavigation />
    </>
  );
}

export default App;
