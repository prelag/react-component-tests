import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "./CurrencyFormat.css"

import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

export const CurrencyFormat = () => {

    const [amount, setAmount] = useState<number>(0.00);
    const [amtStr, setAmtStr] = useState<string>("");
    const [balance, setBalance] = useState(0.00);

    const parseAmt = (value: string) => {
        setAmtStr(value);

        let amt = parseFloat(value);

        if (!isNaN(amt))
            setAmount(parseFloat(value));
        else
            setAmount(0);
    }

    const deposit = () => {
        if (!isNaN(amount))
            setBalance(balance + amount);
    }

    const withdrawal = () => {
        if (!isNaN(amount))
            setBalance(balance - amount);
    }

    const reset = () => {
        setAmount(0)
        setBalance(0)
        setAmtStr("0.00")
    }

    return (
        <div data-testid="currency-format-test-id">
            <h1>Currency Format Component Test</h1>
            <div data-testid="balance-test-id">
                Balance: <span data-testid="balance-span-id">${balance.toFixed(2)}</span>
            </div>
            <div className="inputDiv">
                <span className="p-float-label">
                    <InputText id="in" placeholder="0.00" value={amtStr} onChange={(e) => parseAmt(e.target.value)} />
                    <label htmlFor="in">Amount</label>
                </span>
                <span className="actionBut">
                    <Button name="button-deposit" icon="pi pi-plus" className="p-button-rounded p-button-success" onClick={deposit}>Deposit</Button>
                </span>
                <span className="actionBut">
                    <Button name="button-withdrawal" icon="pi pi-minus" className="p-button-rounded p-button-warning" onClick={withdrawal}>Withdrawal</Button>
                </span>
                <span className="actionBut">
                    <Button name="button-reset" icon="pi pi-ban" className="p-button-rounded p-button-danger" onClick={reset}>Reset</Button>
                </span>
            </div>
        </div>
    )
}