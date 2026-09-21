import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹ {Number(order.price).toFixed(2)}</td>
                  <td
                    className={
                      order.mode === "BUY" ? "profit" : "loss"
                    }
                  >
                    {order.mode}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{orders.length}</h5>
          <p>Total Orders</p>
        </div>

        <div className="col">
          <h5>
            {orders.filter((o) => o.mode === "BUY").length}
          </h5>
          <p>Buy Orders</p>
        </div>

        <div className="col">
          <h5>
            {orders.filter((o) => o.mode === "SELL").length}
          </h5>
          <p>Sell Orders</p>
        </div>
      </div>
    </>
  );
};

export default Orders;