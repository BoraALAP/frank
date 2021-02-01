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
      ],
    },
    {
      label: 'Design Options',
      children: [
        { label: 'Options', listKey: 'Option' },
        { label: 'Option Categories', listKey: 'OptionCategory' },
        { label: 'Products', listKey: 'Product' },
        { label: 'Product Categories', listKey: 'ProductCategory' },
        { label: 'Operations', listKey: 'Operation' },
      ],
    },
  ],
};