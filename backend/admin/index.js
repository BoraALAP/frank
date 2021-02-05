export default {
  pages: () => [
    {
      label: 'Admin',
      children: [
        { label: 'Back End Users', listKey: 'BackEndUser' },
        { label: 'Users', listKey: 'User' },
        { label: 'Password Tokens', listKey: 'ForgottenPasswordToken' },
      ],
    },
    {
      label: 'Content',
      children: [
        { label: 'Imagine Page', listKey: 'Imagine' },
        { label: 'Dealers', listKey: 'Dealer' },
        { label: 'Operations', listKey: 'Operation' },
        { label: 'Products', listKey: 'Product' },
        { label: 'Product Categories', listKey: 'ProductCategory' },
      ],
    },
    {
      label: 'Design Options',
      children: [
        { label: 'Exterior Options', listKey: 'ExteriorOption' },
        { label: 'Interior Options', listKey: 'InteriorOption' },
        { label: 'Screen Options', listKey: 'ScreenOption' },
        { label: 'Hardware Options', listKey: 'HardwareOption' },
        { label: 'Glass Options', listKey: 'GlassOption' },
        { label: 'Divided Lite Options', listKey: 'DividedLiteOption' },
        { label: 'Brickmold and Trim Options', listKey: 'BrickmoldAndTrimOption' },
        

        
      ],
    },
  ],
};