import BookList from '../BookList/BookList';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBook from '../Add-Edit-Book/AddBook';
import EditBook from '../Add-Edit-Book/EditBook';
import Header from '../Header/Header';


function App() {
  return (
    <div className='wrapper'>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={BookList} />
            <Route exact path='/addbook' component={AddBook} />
            <Route exact path='/editbook/:id' component={EditBook} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
