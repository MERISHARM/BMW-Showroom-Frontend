import React, { useState } from 'react';
import '../Styles/Order.css';
import bmwm5 from '../assets/BMWM5.jpeg';

// Demo order data for a car selling platform
const initialOrders = [
  {
    id: 'ORD-9823',
    carModel: 'BMW M5 Competition',
    price: 119900,
    quantity: 1,
    total: 119900,
    orderStatus: 'Delivered',
    paymentStatus: 'Paid',
    orderDate: '2024-06-15',
    deliveryDate: '2024-06-28',
    image: bmwm5,
  },
  {
    id: 'ORD-9824',
    carModel: 'Tesla Model S Plaid',
    price: 89990,
    quantity: 1,
    total: 89990,
    orderStatus: 'Shipped',
    paymentStatus: 'Paid',
    orderDate: '2024-07-22',
    deliveryDate: '2024-08-05',
    image: bmwm5,
  },
  {
    id: 'ORD-9825',
    carModel: 'Porsche 911 Turbo S',
    price: 203500,
    quantity: 1,
    total: 203500,
    orderStatus: 'Processing',
    paymentStatus: 'Pending',
    orderDate: '2024-08-01',
    deliveryDate: '—',
    image: bmwm5,
  },
  {
    id: 'ORD-9826',
    carModel: 'Mercedes-AMG GT Black Series',
    price: 325000,
    quantity: 1,
    total: 325000,
    orderStatus: 'Confirmed',
    paymentStatus: 'Paid',
    orderDate: '2024-08-10',
    deliveryDate: '2024-08-25',
    image: bmwm5,
  },
  {
    id: 'ORD-9827',
    carModel: 'Audi RS e-tron GT',
    price: 147500,
    quantity: 1,
    total: 147500,
    orderStatus: 'Pending',
    paymentStatus: 'Not Paid',
    orderDate: '2024-08-14',
    deliveryDate: '—',
    image: bmwm5,
  },
];

const Order = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Helper to compute total spent
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);

  const handleReorder = (orderId) => {
    alert(`🔄 Reorder initiated for order ${orderId}. Redirecting to checkout.`);
  };

  const handleTrackOrder = (orderId) => {
    alert(`🚚 Tracking details for order ${orderId} will appear shortly.`);
  };

  const getOrderStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered';
      case 'shipped':
        return 'status-shipped';
      case 'processing':
        return 'status-processing';
      case 'confirmed':
        return 'status-confirmed';
      default:
        return 'status-pending';
    }
  };

  const getPaymentStatusClass = (status) => {
    return status.toLowerCase() === 'paid' ? 'payment-paid' : 'payment-unpaid';
  };

  return (
    <div className="order-section-wrapper">
      <div className="container py-5">
        {/* Header with title and summary stats */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <h1 className="order-main-title mb-3 mb-md-0">My Orders</h1>
          <div className="order-summary-stats">
            <div className="stats-card">
              <span className="stats-label">Total Orders</span>
              <span className="stats-value">{orders.length}</span>
            </div>
            <div className="stats-card">
              <span className="stats-label">Total Spent</span>
              <span className="stats-value">${totalSpent.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Orders grid - fully responsive */}
        <div className="orders-grid">
          {orders.length === 0 ? (
            <div className="empty-orders-panel">
              <p>No orders found. Start your journey with an exclusive car.</p>
              <button className="explore-cars-btn">Explore vehicles</button>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-card-image">
                  <img src={order.image} alt={order.carModel} />
                </div>
                <div className="order-card-content">
                  <div className="order-card-header">
                    <h3 className="car-model">{order.carModel}</h3>
                    <span className="order-id">#{order.id}</span>
                  </div>
                  <div className="order-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Order date</span>
                      <span className="detail-value">{order.orderDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Delivery estimate</span>
                      <span className="detail-value">{order.deliveryDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Unit price</span>
                      <span className="detail-value">${order.price.toLocaleString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Quantity</span>
                      <span className="detail-value">{order.quantity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Total amount</span>
                      <span className="detail-value highlight">${order.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="order-status-row">
                    <div className="status-badge-group">
                      <div className={`order-status-badge ${getOrderStatusClass(order.orderStatus)}`}>
                        {order.orderStatus}
                      </div>
                      <div className={`payment-status-badge ${getPaymentStatusClass(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </div>
                    </div>
                    <div className="order-actions">
                      <button
                        className="action-btn secondary"
                        onClick={() => handleTrackOrder(order.id)}
                      >
                        Track
                      </button>
                      <button
                        className="action-btn primary"
                        onClick={() => handleReorder(order.id)}
                      >
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;