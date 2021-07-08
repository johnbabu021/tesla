import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section />
        </Container>
    )
}

export default Home


const Container = styled.div`
height:100vh;
width:100vw;
background-size:cover;
background-position:center;
bacround-repeat:no-repeat;
background-image:url('/images/model-s.jpg');
`