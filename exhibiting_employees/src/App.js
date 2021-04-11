import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/PageBody';
import Search from './components/Search';
import './styles/app.css';

function App() {
  return (
    <div className='app'>
      <Wrapper>
        <Header />
        <Search />
        <EmployeeCard />
      </Wrapper>
    </div>
  );
}

export default App;
