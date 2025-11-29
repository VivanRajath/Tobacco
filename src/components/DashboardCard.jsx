import React from 'react'
import './DashboardCard.css'

function DashboardCard({ icon, title, value, color, subtitle }) {
    return (
        <div className="dashboard-card fade-in">
            <div className="dashboard-card-header">
                <div className={`dashboard-icon ${color}`}>
                    {icon}
                </div>
                <h4 className="dashboard-title">{title}</h4>
            </div>

            <div className="dashboard-value">{value}</div>

            {subtitle && <div className="dashboard-subtitle">{subtitle}</div>}
        </div>
    )
}

export default DashboardCard
