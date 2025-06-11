import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  cardData = [
    { title: 'Booking request', value: '24', icon: 'bi-currency-dollar', change: '+12.5%', trend: 'up' },
    { title: 'Paid Amount', value: '23,40000', icon: 'bi-people-fill', change: '+18.2%', trend: 'up' },
    { title: 'Booked Sites', value: '4', icon: 'bi-clock', change: '+1.2%', trend: 'up' },
    { title: 'Bounce Rate', value: '42.3%', icon: 'bi-arrow-repeat', change: '-2.4%', trend: 'down' },
  ];

  // Sample data for tables
  recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2023-05-12', status: 'Completed', amount: '$120.00' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2023-05-11', status: 'Processing', amount: '$85.50' },
    { id: '#ORD-003', customer: 'Robert Johnson', date: '2023-05-10', status: 'Completed', amount: '$220.75' },
    { id: '#ORD-004', customer: 'Emily Davis', date: '2023-05-09', status: 'Pending', amount: '$65.25' },
    { id: '#ORD-005', customer: 'Michael Brown', date: '2023-05-08', status: 'Completed', amount: '$175.00' }
  ];

  topProducts = [
    { name: 'Site A', sales: 1245, revenue: '$12,450', growth: '+15%' },
    { name: 'Site B', sales: 876, revenue: '$8,760', growth: '+8%' },
    { name: 'Site C', sales: 654, revenue: '$6,540', growth: '-3%' },
    { name: 'Site D', sales: 543, revenue: '$5,430', growth: '+5%' },
    { name: 'Site E', sales: 432, revenue: '$4,320', growth: '+12%' }
  ];
}
