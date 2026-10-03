// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
// 1. Get every order from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Only Alexandria orders that are pending
export function myOrders(orders) {
  return orders.filter((order) => order.city === "Alexandria" && order.status === "pending");
}

// 3. Total revenue: add up price * quantity for every order
export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
}

// 4. Label for one order, or "not found" if the id doesn't exist
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// 5. Keep only item and price, then turn it into JSON text
export function toJsonLines(orders) {
  return JSON.stringify(orders.map((order) => ({ item: order.item, price: order.price })));
}
