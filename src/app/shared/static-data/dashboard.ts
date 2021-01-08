import {DashboardItem} from '../models/dashboard.model';

export const dashboard: DashboardItem[] = [{
  id: 0,
  label: 'New Products',
  value: '7',
  icon: 'icon-pencil'
}, {
  id: 1,
  label: 'New Visits',
  value: '660',
  icon: 'icon-graph '
}, {
  id: 2,
  label: 'New Comments',
  value: '156',
  icon: 'icon-speech'
}, {
  id: 3,
  label: 'Total Visits',
  value: '425',
  icon: 'icon-pointer'
}];

export const dashboardProgress: DashboardItem[] = [{
  id: 0,
  label: 'New Products',
  value: '7',
  icon: 'icon-pencil',
  progress: '80'
}, {
  id: 1,
  label: 'New Visits',
  value: '660',
  icon: 'icon-graph',
  progress: '100'
}, {
  id: 2,
  label: 'New Comments',
  value: '156',
  icon: 'icon-speech',
  progress: '20'
}, {
  id: 3,
  label: 'Total Visits',
  value: '425',
  icon: 'icon-pointer',
  progress: '30'
}];
