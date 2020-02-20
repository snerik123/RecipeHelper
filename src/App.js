import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeFinder';
import RecipeCreator from './components/RecipeCreator';
import Recipe from './components/Recipe';


class App extends React.Component {
  state = {
    current: 'Recipe-creator',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
  
  <header>  
      <Router>  




      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="Recipes">
          <Link to="/Recipes">
          <Icon type="database"/> Recipe List</Link>        
          </Menu.Item>
        <Menu.Item key="Recipe-creator">
        <Link to="/Recipe-creator">
          <Icon type="tool"/>Recipe creator</Link>        
        </Menu.Item>
      </Menu>
      <Switch>
      <Route path='/' exact component={RecipeList} />
      <Route path='/Recipe-creator' component={RecipeCreator} />
      <Route path='/Recipes' component={RecipeList} />
      <Route path='Recipes/:id' component={<Recipe name={this.id}/>} />


          </Switch>
      </Router>

      </header>

    );
  }
}
export default App;

