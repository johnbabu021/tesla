import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for touchless delivery"
                backgroundImg='model-s.jpg'
                leftBtnText="Order Online"
                RightBtnText="Existing Inventory"


            />
            <Section
                title="Model Y"
                description="Order Online for touchless delivery"
                backgroundImg='model-y.jpg'
                leftBtnText="Order Online"
                RightBtnText="Existing Inventory"


            />
            <Section
                title="Model 3"
                description="Order Online for touchless delivery"
                backgroundImg='model-3.jpg'
                leftBtnText="Order Online"
                RightBtnText="Existing Inventory"


            />
            <Section
                title="Model X"
                description="Order Online for touchless delivery"
                backgroundImg='model-x.jpg'
                leftBtnText="Order Online"
                RightBtnText="Existing Inventory"


            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarentee"
                backgroundImg='solar-panel.jpg'
                leftBtnText="Order now"
                RightBtnText="Learn more"


            />
            <Section
                title="Solar for New Roofs"
                description="Solar roof costs Less than a new Roof plus Solar panels"
                backgroundImg='solar-roof.jpg'
                leftBtnText="Order now"
                RightBtnText="Learn more"


            />

            <Section
                title="Accessories"
                backgroundImg='accessories.jpg'
                leftBtnText="Order now"


            />

        </Container>
    )
}

export default Home


const Container = styled.div`
height:100vh;
width:100vw;
`