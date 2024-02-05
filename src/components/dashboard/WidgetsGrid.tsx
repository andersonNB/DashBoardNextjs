'use client'
import React from 'react'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {

    const value = useAppSelector(state => state.counterReducer.count)

    return (
        <div className="flex flex-wrap p-2 justify-center">
            <SimpleWidget
                title={value}
                subtitle='Productos en el carrito'
                href='/dashboard/counter'
                label='Contador'
                icon={<IoCartOutline size={40} className='text-blue-600' />}
            />
        </div>
    )
}