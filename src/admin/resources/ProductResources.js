const productResources = {
  options: {
    properties: {
      categoryId: {
        reference: 'Categories',
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
    },
  },
};

export default productResources;