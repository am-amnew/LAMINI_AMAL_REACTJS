import Carousel from 'react-bootstrap/Carousel';
import o from './image/ohoh.png';
import c from './image/com.png';

import Button from 'react-bootstrap/Button';


function one() {
    return (
        <><br /><br /><br />
            <Carousel>
                <Carousel.Item>
                    <center>
                        <img
                            src={o}
                            alt="First slide"
                        /></center>
                    <Carousel.Caption>
                        <br />
                        <br />
                        <h3>ON TIME - ANY TIME

                        </h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>
                        <img
                            src={o}
                            alt="Second slide"
                        /></center>
                    <br></br>                        <br></br>


                    <Carousel.Caption>
                        <h3>IF YOU NEED ANY HELP LET US KNOW LEAVE A COMMENT</h3>
                        <Button href="/comment" variant="primary" >Comment</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>
                        <img
                            src={o}
                            alt="Third slide"
                        />
                    </center>

                    <Carousel.Caption>


                        <Button href="/signin" variant="primary" >Sign in </Button>
                        <br></br><br></br>
                        <Button href="/signuP" variant="primary" >Sign up  </Button>

                    </Carousel.Caption>

                </Carousel.Item>


            </Carousel >
        </>
    );
}

export default one;