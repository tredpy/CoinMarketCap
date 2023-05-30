import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import { Button } from 'shared/ui/Button/Button';

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const incr = () => {
        dispatch(counterActions.increment())
    }
    const decr = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid="Value">{counterValue}</h1>
            <Button
                data-testid="IncrementBtn"
                view={'background'}
                size={'L'}
                onClick={incr}>+</Button>
            <Button
                data-testid="DecrementBtn"
                view={'background'}
                size={'L'}
                onClick={decr}>-</Button>
        </div>
    );
};
