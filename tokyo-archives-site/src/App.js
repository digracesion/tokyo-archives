import './App.css';

import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import EventPage from './components/EventPage';
import ContactPage from './components/ContactPage';
import TextBox from './components/Textbox';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <TextBox/>
      <TeamPage/>
      <TextBox/>
      <EventPage/>
      <TextBox/>
      <ContactPage/>
    </div>
  );
}

export default App;
