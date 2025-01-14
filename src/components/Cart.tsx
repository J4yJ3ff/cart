"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useCart } from "@/hooks/use-cart";

export const Cart = () => {
  const { items } = useCart();
  const itemCount = items.length;
  const cartTotal = items.reduce((acc, item) => acc + item.item.price, 0);
  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group flex items-center gap-2">
        <ShoppingCart className="size-6 text-gray-400 group-hover:text-gray-500" />
        <span className="text-sm font-medium">{itemCount}</span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea className="h-[60vh]">
                {items.map((item) => (
                  <CartItem item={item.item} key={item.item.id} />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Transaction fee</span>
                  <span>${fee.toFixed(2)}</span>
                </div>

                <div className="flex font-medium">
                  <span className="flex-1">Total</span>
                  <span>${(cartTotal + fee).toFixed(2)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/checkout"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <ShoppingCart className="size-60" />
            </div>

            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
