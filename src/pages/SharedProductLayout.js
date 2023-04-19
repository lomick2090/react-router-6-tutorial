import { Outlet } from 'react-router-dom'

export default function SharedProductLayout() {
    return (
        <div class="section">
            <h2>Products</h2>
            <Outlet />
        </div>
    )
}