import React, {useState} from "react";
import './section.css'
import './checkbox.css'
export default function Section(){
    const [value, setValue] = useState(1);
    const [discountValue, setDiscountValue] = useState(0);
    function handleChange(event){
        if(event.target.checked){
            setDiscountValue(value*0.25);
        }
        else{
            setDiscountValue(0);
        }
    }
    return (
    <main>
        <div id="pricingDiv">
            <h2>{value*10}K PAGEVIEWS</h2>
            <p>${(value)-discountValue }.00</p>
        </div>
        <form>
            <input type="range" min="8" max="40" step="8" value={value} id="range" onChange={(e) => setValue(e.target.value)}/>
                        <p className="mobileValue">${(value)-discountValue }.00</p>

            <div class="checkbox-wrapper-2">
                <div id="billing">
                    <label htmlFor="terms">Monthly Billing</label>
                    <input type="checkbox" name="terms" id="terms" onChange={handleChange} class="sc-gJwTLC ikxBAC"/>
                    <label htmlFor="terms" name="yearly" id="yearly">Yearly Billing</label>
                </div>
            </div>
            <div>
            </div>
        </form>
        <div id="submitDiv">
            <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
            </ul>
            <button id="trialButton">Start my trial</button>
        </div>
    </main>
    )
}