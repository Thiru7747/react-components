// import logo from './logo.svg';
import './styles/style.css';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';
import { Avatar } from './components/Avatar';
import { Card } from './components/Card';
import Scientists from './components/Scienttists';


export default function App() {
  return (
    <>
    <Gallery />
    <TodoList />
    <Avatar />
    <Card />
    <Scientists />
    </>
  );
}

