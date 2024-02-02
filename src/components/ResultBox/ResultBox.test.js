import { cleanup, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import ResultBox from "./ResultBox";
    describe('Component ResultBox', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={100} />);
        });
        it('should render proper info about conversion when PLN -> USD', () => {
            const testCases = [
                { amount: 200, from: 'PLN', to: 'USD' },
                { amount: 134, from: 'PLN', to: 'USD' },
                { amount: 43, from: 'PLN', to: 'USD' },
                { amount: 80, from: 'PLN', to: 'USD' },
          ];
          
          for(const testObj of testCases) {

            const amount = (testObj.amount).toFixed(2);
            const from = testObj.from;
            const to = testObj.to;

            render(<ResultBox from={from} to={to} amount={Number(amount)} />);

            const output = screen.getByTestId('output');

            const result = (amount / 3.5).toFixed(2);

            expect(output).toHaveTextContent(`${from} ${amount} = $${result}`);

            cleanup();

          }
        });
        it('should render proper info about conversion when USD -> PLN', () => {
            const testCases = [
                { amount: 200, from: 'USD', to: 'PLN' },
                { amount: 134, from: 'USD', to: 'PLN' },
                { amount: 43, from: 'USD', to: 'PLN' },
                { amount: 80, from: 'USD', to: 'PLN' },
          ];
          
          for(const testObj of testCases) {

            const amount = (testObj.amount).toFixed(2);
            const from = testObj.from;
            const to = testObj.to;

            render(<ResultBox from={from} to={to} amount={Number(amount)} />);

            const output = screen.getByTestId('output');

            const result = (amount*3.5).toFixed(2);

            expect(output).toHaveTextContent(`$${amount} = ${to} ${result}`);

            cleanup();

          }
        });
        it('should render proper info about conversion when PLN == PLN', () => {

            const testCases = [
                { amount: 200, from: 'PLN', to: 'PLN' },
                { amount: 134, from: 'PLN', to: 'PLN' },
                { amount: 43, from: 'PLN', to: 'PLN' },
                { amount: 80, from: 'PLN', to: 'PLN' },
            ];
        
            for (const testObj of testCases) {
        
              const amount = (testObj.amount).toFixed(2);
              const from = testObj.from;
              const to = testObj.to;
        
              render(<ResultBox from={from} to={to} amount={Number(amount)} />);
        
              const output = screen.getByTestId('output');
        
              expect(output).toHaveTextContent(`${from} ${amount} = ${to} ${amount}`);
        
              cleanup();
            }
        });
        
        it('should render proper info about conversion when  USD == USD', () => {
        
            const testCases = [
                { amount: 200, from: 'USD', to: 'USD' },
                { amount: 134, from: 'USD', to: 'USD' },
                { amount: 43, from: 'USD', to: 'USD' },
                { amount: 80, from: 'USD', to: 'USD' },
            ];
        
            for (const testObj of testCases) {
        
              const amount = (testObj.amount).toFixed(2);
              const from = testObj.from;
              const to = testObj.to;
        
              render(<ResultBox from={from} to={to} amount={Number(amount)} />);
        
              const output = screen.getByTestId('output');
        
              expect(output).toHaveTextContent(`$${amount} = $${amount}`);
        
              cleanup();
            }
        });
        it('should render proper info about conversion when amount is negative', () => {

            const testCases = [
        
                { amount: -200, from: 'USD', to: 'PLN' },
                { amount: -134, from: 'USD', to: 'PLN' },
                { amount: -43, from: 'PLN', to: 'USD' },
                { amount: -80, from: 'PLN', to: 'USD' },  
            ];
        
            for (const testObj of testCases) {
                const amount = testObj.amount;
                const from = testObj.from;
                const to = testObj.to;
        
                render(<ResultBox from={from} to={to} amount={Number(amount)} />);
        
                const output = screen.getByTestId('wrongValue');
        
                expect(output).toHaveTextContent(`Wrong value...`);
        
                cleanup();
            }
        });    
    })