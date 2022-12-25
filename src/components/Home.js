import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model-S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />
            <Section
                title="Model-Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model-3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model-X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-X.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
               title="Low Cost Solar Panels"
               description="Money Back Guarantee"
               backgroundImg="solar-panel.jpg"
               leftBtnText="Order Now"
               rightBtnText="Learn More"
            />
                <Section
               title="Solar For New Roofs"
               description="Solar Roof Costs Less Than a New Roof "
               backgroundImg="solar-roof.jpg"
               leftBtnText="Order Now"
               rightBtnText="Learn More"
            />
                <Section
               title="Accessories"
               description=" "
               backgroundImg="accessories.jpg"
               leftBtnText="Shop Now"
            //    rightBtnText="Learn More"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
 height: 100vh;

`