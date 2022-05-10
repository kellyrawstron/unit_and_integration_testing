import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

 // 

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  // ADD
  it('should add two numbers together', ()=>{
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const operator_add = container.find('#operator-add');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    operator_add.simulate('click');
    button1.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  // SUBTRACT
  it('should subtract one number from another', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const operator_subtract = container.find('#operator-subtract');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operator_subtract.simulate('click');
    button4.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  //MULTIPLY
  it('should multiply two numbers together', () => {
    const button5 = container.find('#number5');
    const button3 = container.find('#number3');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    operator_multiply.simulate('click');
    button3.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  // DIVIDE
  it('should divide two numbers', () => {
    const button4 = container.find('#number4');
    const button2 = container.find('#number2');
    const operator_divide = container.find('#operator-divide');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('2');
  })

  //CONCATENATE
  it('should concatenate two numbers together', () => {
    const button5 = container.find('#number5');
    const button8 = container.find('#number8');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    button8.simulate('click');
    expect(runningTotal.text()).toEqual('58');
  })

  //CHAIN MULTIPLE
  it('should be able to perform two calculations one after the other', () => {
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const operator_divide = container.find('#operator-divide');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button8.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    operator_multiply.simulate('click');
    button2.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('8');
  })

  


})

