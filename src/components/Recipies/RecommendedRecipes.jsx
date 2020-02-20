import React from 'react';
import { List,Avatar} from 'antd';
import 'antd/dist/antd.css';
import {RecommendedRecipeNames} from '../../resources/helpers'


function RecommendedRecipes(){

    const listData = [];
        const allNames = RecommendedRecipeNames();

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
    header={<h1>Populära recept</h1>}
    bordered    
    pagination={{
      pageSize: 4,
      size:"small",

      position: "top",
    }}
    dataSource={listData}
    renderItem={item => (
      
      <List.Item
        key={item.title}
      >
        {item.content}

        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
        />
      </List.Item>
    )}
  />    )
    

}
export default RecommendedRecipes;