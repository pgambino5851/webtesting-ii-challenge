import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

describe('<App />', () => {

  it('renders without crashing', () => {
    render(<App />);
    cleanup()
  })

  it('renders "Baseball Counter App', () => {
    const { getByText } = render(<App />);

    const text = getByText(/baseball counter app/i);
    expect(text).toBeInTheDocument();
    cleanup();
  })

  it('should render a ball increment when someone clicks on the ball button', () => {
    const { getByText, getByTestId } = render(<App />);
    const ballBtn = getByTestId('ballBtn');
    fireEvent.click(ballBtn);
    const res = getByTestId('balls').textContent;
    expect(res).toBe('Balls: 1');
    cleanup();
  })

  it('should render incrementing balls until there are 4, and reset to 0 on the 4th one', () => {
    const { getByTestId } = render(<App />);
    const ballBtn = getByTestId('ballBtn');
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    const res = getByTestId('balls').textContent;
    expect(res).toBe('Balls: 3');
    fireEvent.click(ballBtn);
    const reset = getByTestId('balls').textContent; 
    expect(reset).toBe('Balls: 0');
    cleanup();
  })


  it('should render a strike increment when someone clicks on the ball button', () => {
    const { getByText, getByTestId } = render(<App />);
    const strikeBtn = getByTestId('strikeBtn');
    fireEvent.click(strikeBtn);
    const res = getByTestId('strikes').textContent;
    expect(res).toBe('Strikes: 1');
    cleanup();
  })

  it('should render incrementing strike until there are 3, and reset to 0 on the 3rd one', () => {
    const { getByTestId } = render(<App />);
    const strikeBtn = getByTestId('strikeBtn');
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    const res = getByTestId('strikes').textContent;
    expect(res).toBe('Strikes: 2');
    fireEvent.click(strikeBtn);
    const reset = getByTestId('strikes').textContent; 
    expect(reset).toBe('Strikes: 0');
    cleanup();
  })

  it('should render incrementing fouls as strikes until there are 2, and then only increment fouls', () => {
    const { getByTestId } = render(<App />);
    const foulBtn = getByTestId('foulBtn');
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    const strikes = getByTestId('strikes').textContent;
    const fouls =  getByTestId('fouls').textContent;
    expect(strikes).toBe('Strikes: 2')
    expect(fouls).toBe('Fouls: 4')
    cleanup()
  })

  it('should reset fouls to 0 on the third strike', () => {
    const { getByTestId } = render(<App />);
    const strikeBtn = getByTestId('strikeBtn');
    const foulBtn = getByTestId('foulBtn');
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    let strikes = getByTestId('strikes').textContent;
    let fouls =  getByTestId('fouls').textContent;
    expect(strikes).toBe('Strikes: 2');
    expect(fouls).toBe('Fouls: 4')
    fireEvent.click(strikeBtn);
    strikes = getByTestId('strikes').textContent; 
    fouls = getByTestId('fouls').textContent;
    expect(strikes).toBe('Strikes: 0');
    expect(fouls).toBe('Fouls: 0');
    cleanup();
  })

  it('should reset everything to 0 after 4 balls', () => {
    const { getByTestId } = render(<App />);
    const strikeBtn = getByTestId('strikeBtn');
    const foulBtn = getByTestId('foulBtn');
    const ballBtn = getByTestId('ballBtn');
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    let strikes = getByTestId('strikes').textContent;
    let fouls =  getByTestId('fouls').textContent;
    let balls =  getByTestId('balls').textContent;
    expect(strikes).toBe('Strikes: 2');
    expect(fouls).toBe('Fouls: 4')
    expect(balls).toBe('Balls: 3')
    fireEvent.click(ballBtn);
    strikes = getByTestId('strikes').textContent;
    fouls =  getByTestId('fouls').textContent;
    balls =  getByTestId('balls').textContent;
    expect(strikes).toBe('Strikes: 0');
    expect(fouls).toBe('Fouls: 0')
    expect(balls).toBe('Balls: 0')
    cleanup();
  })

  it('should reset everything to 0 after a hit', () => {
    const { getByTestId } = render(<App />);
    const strikeBtn = getByTestId('strikeBtn');
    const foulBtn = getByTestId('foulBtn');
    const ballBtn = getByTestId('ballBtn');
    const hitBtn = getByTestId('hitBtn')
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(foulBtn);
    let strikes = getByTestId('strikes').textContent;
    let fouls =  getByTestId('fouls').textContent;
    let balls =  getByTestId('balls').textContent;
    expect(strikes).toBe('Strikes: 2');
    expect(fouls).toBe('Fouls: 4')
    expect(balls).toBe('Balls: 3')
    fireEvent.click(hitBtn);
    strikes = getByTestId('strikes').textContent;
    fouls =  getByTestId('fouls').textContent;
    balls =  getByTestId('balls').textContent;
    expect(strikes).toBe('Strikes: 0');
    expect(fouls).toBe('Fouls: 0')
    expect(balls).toBe('Balls: 0')
  })
})