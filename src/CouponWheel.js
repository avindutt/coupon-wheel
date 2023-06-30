import {useState} from 'react';
import './CouponWheel.css';

const CouponWheel = () => {
    const [spinCount, setSpinCount] = useState(0);
    const [result, setResult] = useState('Click the "SPIN" button');
    const [spinning, setSpinning] = useState(false);
    const items = ['10', '20', '30', '40', '50', '60', '70', '80'];

    const spinWheel = () => {
        setSpinning(true);
        // when the wheel runs first time
        if (spinCount === 0) {
            setSpinCount(1);
            setResult('Spinning...');
            setTimeout(()=>{
                setResult('Try again');
                setSpinning(false);
            }, 5000);
        }

        // wheel runs for second time
        if(spinCount === 1){
            setSpinning(true);
            const randomIndex = Math.floor(Math.random() * items.length);
            setTimeout(() => {
                setResult(`Congratulations! You won a DISCOUNT COUPON of ${items[randomIndex]}%`);
                setSpinCount(2);
                setSpinning(false);
            }, 3000);
        }
    };

    return (
        <div>
            <button onClick={spinWheel} id="spin" disabled={spinCount == 2}>SPIN</button>
            <span className="arrow"></span>
                <div className={`container ${ spinning ? 'wheel' : 'wheel-2'}`}>
                    <div className="one">10%</div>
                    <div className="two">20%</div>
                    <div className="three">30%</div>
                    <div className="four">40%</div>
                    <div className="five">50%</div>
                    <div className="six">60%</div>
                    <div className="seven">70%</div>
                    <div className="eight">80%</div>
                </div>
               <div id='results'>
                <p>{result}</p>
               </div>
        </div>
    );
}

export default CouponWheel;