export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "itemsPrice",
      title: "Items Price",
      type: "number",
    },
    {
      name: "shippingPrice",
      title: "Shipping Price",
      type: "number",
    },
    {
      name: "taxPrice",
      title: "Tax Price",
      type: "number",
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "shippingAddress",
    },
    {
      name: "paymentResult",
      title: "Payment Result",
      type: "paymentResult",
    },
    {
      name: "orderItems",
      title: "Order Items",
      type: "array",
      of: [
        {
          title: "Order Item",
          type: "orderItem",
        },
      ],
    },
    {
      name: "isPaid",
      title: "IsPaid",
      type: "boolean",
    },
    {
      name: "paidAt",
      title: "Paid Date",
      type: "datetime",
    },
    {
      name: "deliveredAt",
      title: "DeliveredAt",
      type: "datetime",
    },
    {
      name: "createdAt",
      title: "CreatedAt",
      type: "datetime",
    },
  ],
};
