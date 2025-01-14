'use client'

import { useCart } from '@/hooks/use-cart'
import { ImageIcon, X } from 'lucide-react'
import React from 'react'

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
  }
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem } = useCart()

  return (
    <div className='space-y-3 py-2'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center space-x-4'>
          <div className='relative aspect-square size-16 overflow-hidden min-w-fit rounded'>
            <ImageIcon className='size-4 text-muted-foreground' />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-medium mb-1 line-clamp-1'>
              {item.name}
            </span>
            <span className='text-sm text-muted-foreground'>
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={() => removeItem({ item })}
          className='text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-0.5'
        >
          <X className='w-3 h-4' />
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem