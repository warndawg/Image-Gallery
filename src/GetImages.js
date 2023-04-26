import { Card, Container, Dropdown, Divider, Header } from "semantic-ui-react";  
import Modal from "./Modal";
import GetImageInfo from "./useUpsplashApi";
import { useState } from "react";
    
    
export default function RenderImages() {

    const [collection, setCollection] = useState('wallpapers')

    const images = GetImageInfo('https://api.unsplash.com/topics/' + collection +'/photos/?', '&per_page=24&order_by=popular')
    console.log(images)

    const collections = GetImageInfo ('https://api.unsplash.com/topics/?', '&per_page=20')
    console.log(collections)

    const options = collections.map((collection) => ({
        key: collection.id,
        text: collection.title,
        value: collection.id,
    }))

    return (
        <Container>
            <Divider hidden />
            <Header as='h1' textAlign='center'>
                <Header.Content>
                    Image Gallery
                </Header.Content>
            </Header>             
            <Divider />
                <Dropdown
                    placeholder='Select Topics'
                    fluid
                    selection
                    options={options}
                    onChange= {(e, { value }) => setCollection(value)}
                    defaultValue='bo8jQKTaE0Y'
                />
            <Divider />
           {!images ? <h1>Loading...</h1> : 
            <Card.Group centered>
                {images.map((image) => (
                    <Card key={image.id}>
                        <Modal 
                            imageUrlFull={image.urls.full} 
                            imageUrlSmall={image.urls.small} 
                            imageAlt={image.alt_description}
                            />
                        <Card.Content>
                            <Card.Meta>
                                <img src={image.user.profile_image.small} alt={image.user.name} />
                                <span /><span />
                                {image.user.name} 
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
            }
        </Container>
    )
}
