import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Feedback = () => (
    <div  id='cont' className='cont'>
    <div>ВІДГУКИ</div>
    <div className='carousel'>
    <Carousel>
    <div>
        <img alt='review one' src="../images/screen16.png" />
    </div>
    <div>
        <img alt='review two' src="../images/screen15.png" />
    </div>
    <div>
        <img alt='review three'src="../images/screen14.png" />
    </div>
    <div>
        <img alt='review four' src="../images/screen17.png" />
    </div>
    <div>
        <img alt='review five' src="../images/screen18.png" />
    </div>
    <div>
        <img alt='review six' src="../images/screen19.png" />
    </div>

    <div>
        <img alt='review seven' src="../images/screen20.png" />
    </div>
    <div>
        <img alt='review eight' src="../images/screen21.png" />
    </div>
    <div>
        <img alt='review nine' src="../images/screen22.png" />
    </div>

</Carousel>
</div>
</div>

);

export default Feedback;


