import {MenuItemModel} from '../models/menuItem.model';

export const Menu: MenuItemModel[] = [{
  id: 0,
  title: 'Dashboard',
  router: '/pages/dashboard',
  icon: 'dashboard'
}, {
  id: 1,
  title: 'Add Product',
  router: '/pages/add-product',
  icon: 'add'
}];
