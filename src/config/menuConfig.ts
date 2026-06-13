import type { MenuConfig } from './menuConfig.types.ts'

export const menuConfig: MenuConfig = {
  categories: [
    {
      id: 'haircuts',
      label: 'Haarschnitte',
      items: [
        { id: 'service-1', title: 'Trocken-Haarschnitt', price: '18 €' },
        { id: 'service-2', title: 'Haare schneiden, waschen + föhnen', price: '20 €' },
        { id: 'service-7', title: 'Maschinen Haarschnitt', price: '15 €' },
        { id: 'service-8', title: 'Rentner Haarschnitt', price: '15 €' },
        { id: 'service-9', title: 'Schüler bis 16 Jahre', price: '15 €' },
      ],
    },
    {
      id: 'beard',
      label: 'Bart',
      items: [
        { id: 'service-3', title: 'Haare + Bart + waschen + föhnen', price: '30 €' },
        { id: 'service-4', title: 'Bart Rasur mit Maschine', price: '8 €' },
        { id: 'service-5', title: 'Nass Rasur', price: '10 €' },
        { id: 'service-6', title: 'Bartstyling', price: '12 €' },
      ],
    },
    {
      id: 'extras',
      label: 'Extras',
      items: [
        { id: 'service-10', title: 'Heiß Wax', price: 'ab 5 €' },
        { id: 'service-11', title: 'Augenbrauen', price: '5 €' },
        { id: 'service-12', title: 'Haare waschen', price: 'extra 2 €' },
      ],
    },
  ],
}
