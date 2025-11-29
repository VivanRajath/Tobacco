import React from 'react'
import DashboardCard from '../components/DashboardCard'
import { FaCheckCircle, FaShoppingCart, FaRupeeSign } from 'react-icons/fa'
import './BuyerDashboard.css'

function BuyerDashboard() {
    const dashboardStats = [
        {
            icon: <FaCheckCircle />,
            title: 'KYC Status',
            value: 'Verified',
            color: 'success',
            subtitle: 'Verified on Nov 15, 2025'
        },
        {
            icon: <FaShoppingCart />,
            title: 'Total Orders',
            value: '24',
            color: 'info',
            subtitle: 'Last order: 2 days ago'
        },
        {
            icon: <FaRupeeSign />,
            title: 'Total Spent',
            value: '₹1,24,500',
            color: 'warning',
            subtitle: 'This fiscal year'
        }
    ]

    const transactions = [
        {
            id: 'ORD-2025-001',
            date: '2025-11-27',
            product: 'Premium Virginia Tobacco',
            quantity: '50 kg',
            amount: 225000,
            status: 'Delivered'
        },
        {
            id: 'ORD-2025-002',
            date: '2025-11-22',
            product: 'Fine Cut Tobacco',
            quantity: '30 kg',
            amount: 114000,
            status: 'In Transit'
        },
        {
            id: 'ORD-2025-003',
            date: '2025-11-18',
            product: 'Pipe Tobacco Blend',
            quantity: '25 kg',
            amount: 130000,
            status: 'Delivered'
        },
        {
            id: 'ORD-2025-004',
            date: '2025-11-12',
            product: 'Rolling Tobacco',
            quantity: '40 kg',
            amount: 168000,
            status: 'Delivered'
        },
        {
            id: 'ORD-2025-005',
            date: '2025-11-05',
            product: 'Premium Cigar Tobacco',
            quantity: '20 kg',
            amount: 130000,
            status: 'Delivered'
        }
    ]

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'status-delivered'
            case 'In Transit':
                return 'status-transit'
            case 'Processing':
                return 'status-processing'
            default:
                return ''
        }
    }

    return (
        <div className="dashboard-page">
            <div className="container">
                <div className="dashboard-header fade-in">
                    <h1>Buyer Dashboard</h1>
                    <p>Track your orders and account status</p>
                </div>

                {/* Dashboard Stats */}
                <div className="stats-grid grid grid-3">
                    {dashboardStats.map((stat, index) => (
                        <DashboardCard key={index} {...stat} />
                    ))}
                </div>

                {/* Transaction History */}
                <div className="transactions-section slide-in">
                    <h2 className="section-title">Recent Transactions</h2>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id}>
                                        <td className="order-id">{transaction.id}</td>
                                        <td>{new Date(transaction.date).toLocaleDateString('en-IN')}</td>
                                        <td className="product-name">{transaction.product}</td>
                                        <td>{transaction.quantity}</td>
                                        <td className="amount">₹{transaction.amount.toLocaleString('en-IN')}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(transaction.status)}`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard
