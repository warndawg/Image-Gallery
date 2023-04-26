import React from 'react'
import { Header, Segment, Dropdown } from 'semantic-ui-react'
import GetImageInfo from './useUpsplashApi';


export default function HeaderExampleTextAlignment()  {
  const collections = GetImageInfo ('https://api.unsplash.com/topics/?', '')
  console.log(collections)

  const options = collections.map((collection) => ({
    key: collection.id,
    text: collection.title,
    value: collection.id,
  }))
  
  return (
    <Segment>
      <Header as='h3' textAlign='center'>
        Topics
      </Header>
      <Dropdown
        placeholder='Select Topics'
        fluid
        selection
        options={options}
      />
    </Segment>
  )
}

