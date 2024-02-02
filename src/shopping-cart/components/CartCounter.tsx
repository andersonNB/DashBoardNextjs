'use client'
import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {


    const count = useAppSelector(state => state.counterReducer.count);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(initCounterState(value));
    }, [dispatch, value])



    const handleAdd = () => dispatch(addOne())

    const handleDecrease = () => dispatch(substractOne())

    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    onClick={handleAdd}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={handleDecrease}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
