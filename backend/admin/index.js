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
        { label: 'Product Operations', listKey: 'Operation' },
        { label: 'Dealers', listKey: 'Dealer' },
      ],
    },
  ],
};