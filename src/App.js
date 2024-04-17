// import logo from './logo.svg';
import './styles/style.css';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';
import { Avatar } from './components/Avatar';
import { Card } from './components/Card';
import Scientists from './components/Scienttists';
import PackingList from './components/PackingList';
import Lists from './components/Lists';
import RecipesList from './components/RecipesList';
import PureComponent from './components/PureComponent';
import Sculptures from './components/Sculptures';
import { Buttons } from './components/Buttons';
import Eventhandlers from './components/Eventhandlers';
import Toolbar from './components/Toolbar';
import Stategallery from './components/State/Stategallery';


export default function App() {
  return (
    <>
      <Gallery />
      <TodoList />
      <Avatar />
      <Card />
      <Scientists />
      <PackingList />
      <Lists />
      <RecipesList />
      <PureComponent />
      <Sculptures />
      <br></br>
      <Buttons />
      <br>
      </br>
      <Eventhandlers />
      <Toolbar />
      <hr></hr>
      <Stategallery />
    </>
  );
}

