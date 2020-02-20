import React from 'react';
import { List,Avatar} from 'antd';
import 'antd/dist/antd.css';
import {FavoriteRecipeNames} from '../../resources/helpers'
import {Recipe} from '../Recipe.jsx';


class FavoriteRecipes extends React.Component{


    render() {
    

        const listData = [];
        const allNames = FavoriteRecipeNames();

                
        for (let i = 0; i < allNames.length; i++) {
            listData.push({
              href: 'http://ant.design',

                avatar: 'https://icon-library.net/images/healthy-food-icon-png/healthy-food-icon-png-22.jpg',
                title: `${allNames[i]}`,

}
);
}
    
        return (
            
<List
    itemLayout="vertical"
    header={<h1>Mina recept</h1>}
    bordered    
    pagination={{
      pageSize: 6,
    }}
    dataSource={listData}
    renderItem={item => (
      
      <List.Item
        key={item.title}
      >
        {item.content}

        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={'/posts/' + item.title} to={<Recipe name={item.title}/>}>{item.title}</a>}
        />
      </List.Item>
    )}
  />
  
  )
      }
}
export default FavoriteRecipes;