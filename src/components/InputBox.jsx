import React, {useId} from "react";

function InputBox({
                      label,
                      amount,
                      onAmountChange,
                      onCurrencyChange,
                      currencyOptions = [],
                      selectCurrency = "usd",
                      className = ""
                  }) {
    const amountInputId = useId()

    return (
        <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="mb-2 text-black/40 inline-block">{label}</label>
                <input
                    id={amountInputId}
                    type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Enter Value"
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select  className="outline-none cursor-pointer bg-grey-100 py-1 px-1 rounded-lg" value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency)=>(<option key={currency} value={currency}>{currency}
                    </option>))}
                </select>
            </div>
        </div>
    )
}


export default InputBox