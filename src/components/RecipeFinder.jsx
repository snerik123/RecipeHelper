import React, { Component }  from 'react';
import { Layout, Input } from 'antd';
import FavoriteRecipes from './Recipies/FavoriteRecipes.jsx';
import RecommendedRecipes from './Recipies/RecommendedRecipes.jsx';
import 'antd/dist/antd.css';
import './RecipeFinder.css'



class RecipeLists extends Component{


render () {
    const { Sider, Content } = Layout;
    const { Search } = Input;


return (
    
           
<Layout>
        <Content>
        <Search
      placeholder="input search text"
      enterButton="Search"
      onSearch={value => console.log(value)}
      style={{ width: 250, float:"right"}}
    /> 

          <FavoriteRecipes/>
          </Content>
        <Sider>         
          <RecommendedRecipes/>
          </Sider>
          </Layout> 
)
}}

export default RecipeLists;