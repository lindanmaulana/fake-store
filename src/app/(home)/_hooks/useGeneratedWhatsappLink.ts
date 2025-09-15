import { useMemo } from "react";
import { useCartStore } from "./useCartStore";

export const useGenerateWhatsappLink = (phoneNumber: number) => {
  const {cart, subTotal} = useCartStore()

  const message = useMemo(() => {
      const orderList = cart.map((item, index) => {
        return `${index + 1}. ${item.title} (x${item.qty})\n- US$${item.price}`;
      }).join("\n"); 
    
      const message = `Hallo, saya ingin memesan:\n${orderList}\n\nTotal = US$${subTotal}`;
    
      const encodedMessage = encodeURIComponent(message);

      return encodedMessage
  }, [cart, subTotal])

  return `https://wa.me/${phoneNumber}?text=${message}`;
};