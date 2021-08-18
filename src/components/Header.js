import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="noimage" />

            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>

            </Menu>

            <RightMenu>

                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)}>
                    Menu
                </CustomMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <p>
                            <CustomClose onClick={() => setBurgerStatus(!burgerStatus)} />
                        </p>
                    </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">CyberTruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Found us</a></li>
                    <li><a href="#">Support</a></li>


                </BurgerNav>



            </RightMenu>


        </Container>
    )
}

export default Header


const Container = styled.div`
font-size:19px;
font-weight:400;
width:100vw;
position:fixed;
justify-content:space-between;
min-height:60px;
display:flex;
align-items:center;
padding:0 20px;
z-index:1;

`
const Menu = styled.div`

display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    padding:10px 10px;
    flex-wrap:nowrap;
    border-radius:10px;

}
a:hover{
background-color:#6b706c;
opacity:0.6;
padding:10px;
border-radius:10px;
transition:3.9s ease-out;
}
@media(max-width:768px){
    display:none;
}



`
const RightMenu = styled.div`
display:flex;
a{
    margin-right:13px;
    padding:10px;
    border-radius:10px;
}
a:hover{
    background-color:#6b706c;
    opacity:0.6;
    padding:10px;
    border-radius:10px;
    transition:3.9s ease-out; 
}


`
const CustomMenu = styled.div`
cursor:pointer;
padding:10px;
border-radius:10px;
&:hover{
    background-color:#6b706c;
    opacity:0.6;
    padding:10px;
    border-radius:10px;
    transition:3.9s ease-out; 
}
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
background:white;   
list-style-type:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:0.5s ease-in-out;

li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
}
a{
    font-weight:400;
}
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;


`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
p:hover{
    background:#d2d5d9;
    border-radius:40px;
    opacity:0.7;
}

`