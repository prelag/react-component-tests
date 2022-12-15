import {render, screen, cleanup} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import {CurrencyFormat} from "../CurrencyFormat";
import exp from "constants";

afterEach(() => {
    cleanup()
})

test('Component should render', () => {
    render(<CurrencyFormat />);

    const currencyFormatComponent = screen.getByTestId('currency-format-test-id');

    expect(currencyFormatComponent).toBeInTheDocument();

})

describe('Currency Format', () => {
    it('should render deposit button', () => {
        render(<CurrencyFormat />);

        const depositButton = screen.getByRole('button', {name: 'Deposit'});

        expect(depositButton).toBeInTheDocument();
    })
    it('should render withdraw button', () => {
        render(<CurrencyFormat />);

        const withdrawButton = screen.getByRole('button', {name: 'Withdraw'});

        expect(withdrawButton).toBeInTheDocument();
    })
    it('should render reset button', () => {
        render(<CurrencyFormat />);

        const resetButton = screen.getByRole('button', {name: 'Reset'});

        expect(resetButton).toBeInTheDocument();
    })
    it('should increment balance by amount when deposit button clicked', () => {
        //setup
        render(<CurrencyFormat />);
        const depositButton = screen.getByRole('button', {name: 'Deposit'});
        const inputText = screen.getByLabelText(/amount/i);

        //actions
        userEvent.click(inputText);
        userEvent.type(inputText, '50');
        userEvent.click(depositButton);

        //assertions
        expect(screen.getByTestId('balance-span-id')).toHaveTextContent("$50.00");
    })
    it('should decrement balance by amount when withdraw button clicked', () => {
        //setup
        render(<CurrencyFormat />);
        const withdrawButton = screen.getByRole('button', {name: 'Withdraw'});
        const inputText = screen.getByLabelText(/amount/i);

        //actions
        userEvent.click(inputText);
        userEvent.type(inputText, '50');
        userEvent.click(withdrawButton);

        //assertions
        expect(screen.getByTestId('balance-span-id')).toHaveTextContent("$-50.00");
    })

})