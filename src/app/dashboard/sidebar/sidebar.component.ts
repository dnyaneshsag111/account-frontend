import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  List,
  FileText,
  Mail,
  Calendar,
  ShoppingCart,
  BarChart,
  Layers,
  Plus,
  Minus,
  Menu,
  CircleDot,
  LucideAngularModule
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  icon: any; // Use 'any' as the icon can be an Angular component
  route?: string;
  children?: MenuItem[];
  isCollapsible?: boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule,CommonModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
    animations: [
   trigger('slide', [
  state('up', style({ height: '0', opacity: '0', overflow: 'hidden' })),
  state('down', style({ height: '*', opacity: '1', overflow: 'hidden' })),
  transition('up <=> down', animate('300ms ease-in-out')),
]),
    trigger('rotate', [
      state('left', style({ transform: 'rotate(-90deg)' })),
      state('right', style({ transform: 'rotate(0deg)' })),
      transition('left <=> right', animate('200ms ease-in-out')),
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateX(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', animate('200ms ease-in-out')),
      transition('* => void', animate('100ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  isSidebarOpen = true;
  openMenu: string | null = null;
  ChevronRight = ChevronRight;
  ChevronLeft = ChevronLeft;
  Plus = Plus;
  Minus = Minus;
  menuIcon = Menu;
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: Home,
      route: '/',
    },
    {
      label: 'Compnay',
      icon: FileText,
      isCollapsible: true,
      children: [
        {
          label: 'Invoice', route: '/invoice',
          icon: ShoppingCart
        },
        {
          label: 'Profile', route: '/profile',
          icon: ShoppingCart
        },
        {
          label: 'Login', route: '/login',
          icon: ShoppingCart
        },
        {
          label: 'Register', route: '/register',
          icon: ShoppingCart
        },
        {
          label: 'Lockscreen', route: '/lockscreen',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Sites',
      icon: Mail,
      isCollapsible: true,
      children: [
        {
          label: 'Inbox', route: '/inbox',
          icon: ShoppingCart
        },
        {
          label: 'Compose', route: '/compose',
          icon: ShoppingCart
        },
        {
          label: 'Read', route: '/read-mail',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Bookings',
      icon: Calendar,
      route: '/calendar',
    },
    {
      label: 'New Booking',
      icon: ShoppingCart,
      route: '/ecommerce',
    },
    {
      label: 'Charts',
      icon: BarChart,
      isCollapsible: true,
      children: [
        {
          label: 'ChartJS', route: '/chartjs',
          icon: ShoppingCart
        },
        {
          label: 'Flot Charts', route: '/flot-charts',
          icon: ShoppingCart
        },
        {
          label: 'Inline Charts', route: '/inline-charts',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Hordings',
      icon: Layers,
      isCollapsible: true,
      children: [
        {
          label: 'General', route: '/general',
          icon: ShoppingCart
        },
        {
          label: 'Icons', route: '/icons',
          icon: ShoppingCart
        },
        {
          label: 'Buttons', route: '/buttons',
          icon: ShoppingCart
        },
        {
          label: 'Sliders', route: '/sliders',
          icon: ShoppingCart
        },
        {
          label: 'Modals', route: '/modals',
          icon: ShoppingCart
        },
        {
          label: 'Navbar', route: '/navbar',
          icon: ShoppingCart
        },
        {
          label: 'Timeline', route: '/timeline',
          icon: ShoppingCart
        },
        {
          label: 'Ribbons', route: '/ribbons',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Payments',
      icon: List,
      isCollapsible: true,
      children: [
        {
          label: 'General Elements', route: '/form-general',
          icon: ShoppingCart
        },
        {
          label: 'Advanced Elements', route: '/form-advanced',
          icon: ShoppingCart
        },
        {
          label: 'Editors', route: '/form-editors',
          icon: ShoppingCart
        },
        {
          label: 'Validation', route: '/form-validation',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Pending Payments',
      icon: List,
      isCollapsible: true,
      children: [
        {
          label: 'Simple Tables', route: '/table-simple',
          icon: ShoppingCart
        },
        {
          label: 'DataTables', route: '/table-data',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Partners',
      icon: FileText,
      isCollapsible: true,
      children: [
        {
          label: 'Blank Page', route: '/blank',
          icon: ShoppingCart
        },
        {
          label: 'Starter Page', route: '/starter',
          icon: ShoppingCart
        },
      ],
    },
    {
      label: 'Locations',
      icon: List,
      isCollapsible: true,
      children: [
        {
          label: 'Level 1',
          children: [
            {
              label: 'Level 2', route: '/level2',
              icon: ShoppingCart
            },
            {
              label: 'Level 2',
              children: [
                {
                  label: 'Level 3', route: '/level3',
                  icon: ShoppingCart
                },
                {
                  label: 'Level 3', route: '/level3-2',
                  icon: ShoppingCart
                },
              ],
              icon: ShoppingCart
            },
          ],
          icon: ShoppingCart
        },
        {
          label: 'Level 1', route: '/level1-2',
          icon: ShoppingCart
        },
      ],
    },
      {
        label: 'Profle',
        icon: CircleDot,
        isCollapsible: true,
        children: [
          {
            label: 'Details', route: '/cssexample',
            icon: ShoppingCart
          },
          {
            label: 'Log out', route: '/jsexample',
            icon: ShoppingCart
          },
        ]
    },
  ];

  private routerSubscription: Subscription | undefined;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // You might want to close the sidebar on navigation in a single-page app
        // this.isSidebarOpen = false;
        this.openMenu = null; // Also close any open submenus
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleMenuClick(label: string) {
    this.openMenu = this.openMenu === label ? null : label;
  }

  navigateTo(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

    getIconComponent(icon: any) {
    return icon;
  }
}
