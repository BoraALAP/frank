export default {
  pages: () => [
    // Custom pages
    // {
    //   label: 'A new dashboard',
    //   path: '',
    //   component: Dashboard,
    // },
    // {
    //   label: 'About this project',
    //   path: 'about',
    //   component: About,
    // },
    // Ordering existing list pages
    {
      label: 'Main',
      children: [
        { listKey: 'User' },
      ],
    },
    {
      label: 'Product',
      children: [{ listKey: 'Products' }, { listKey: 'PostCategory', label: 'Categories' },],
    },
    {
      label: 'Pages',
      children: [
        { listKey: 'Imagine' },
        { listKey: 'ContactUsForms' },
        { listKey: 'Dealers' },
      ],
    },
    {
      label: 'Options',
      children: [
        { listKey: 'BrickmouldAndTrim' },
        { listKey: 'DividedLite'},
        { listKey: 'Exterior' },
        { listKey: 'Interior' },
        { listKey: 'Glass' },
        { listKey: 'GlassColor' },
        { listKey: 'HardwareKit' },
                { listKey: 'Screen' }
        

      ],
    },
  ],
};