import React from 'react'
import { StyledHeader, Nav, Logo, Image} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Container>
                    <Nav>
                        <Logo src='https://picsum.photos/200/100' alt='logo-image' />
                        <Button>Try it free</Button>
                    </Nav>

                    <Flex>
                        <div>
                            <h1>Build The Community Your Fans Will Love</h1>

                            <p>
                                Huddle re-imagines the way we build communities. You have a voice,
                                but so does your audience. Create connections with your users as
                                you engage in genuine discussion.
                            </p>

                            <Button bg='#ff0099' color='#fff'>
                                Get Started For Free
                            </Button>
                        </div>

                        <Image src='https://picsum.photos/200/100' alt=''/>
                    </Flex>
                </Container>
            </StyledHeader>
        </>
    )
}

export default Header