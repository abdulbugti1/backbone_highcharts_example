$(document).ready(function(){

  var salesItems = new SalesItems([{
    year: 1980,
    sales: 14000,
  },
  {
    year: 1985,
    sales: 22000,
  },
  {
    year: 1990,
    sales: 104000,
  },
  {
    year: 1995,
    sales: 87000,
  },
  {
    year: 2000,
    sales: 43400,
  }

  ]);

  var salesItemsView = new SalesItemsView({collection:salesItems});
  $("body").prepend(salesItemsView.render().$el);
});
