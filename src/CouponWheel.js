import {useState} from 'react';
import './CouponWheel.css';

const CouponWheel = () => {
    const [spinCount, setSpinCount] = useState(0);
    const [result, setResult] = useState('');
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

    return (
        <div>
            <button id="spin">SPIN</button>
                <span class="arrow"></span>
                <div class="container">
                    <div class="one">1</div>
                    <div class="two">2</div>
                    <div class="three">3</div>
                    <div class="four">4</div>
                    <div class="five">5</div>
                    <div class="six">6</div>
                    <div class="seven">7</div>
                    <div class="eight">8</div>
                </div>
        </div>
    );
}

export default CouponWheel;