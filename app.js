var app = angular.module('shoppingApp',[]);
app.controller('shoppingController',function($scope){

	$scope.cartCount=0;

	$scope.products=[
	{
		id : '1',
		title : 'Iphone 6s 32 GB (Space Grey)',
		price : '48000',
		imgUrl : 'https://goo.gl/CRqsdC'


	},
	{
		id : '2',
		title : 'Iphone 6 32 GB (Rose Gold)',
		price : '43000',
		imgUrl : 'https://goo.gl/yDH6da'
	},
	{
		id : '3',
		title : 'Iphone 7 32 GB',
		price : '54000',
		imgUrl : 'https://goo.gl/CRqsdC'
	},
	{
		id : '4',
		title : 'oppo f1s',
		price : '17500',
		imgUrl : 'https://goo.gl/S9YXQV'
	},
	{
		id : '5',
		title : 'Iphone 6s 32 GB (Space Grey)',
		price : '48000',
		imgUrl : 'https://goo.gl/CRqsdC'


	},
	{
		id : '6',
		title : 'Iphone 6 32 GB (Rose Gold)',
		price : '43000',
		imgUrl : 'https://goo.gl/yDH6da'
	},
	{
		id : '7',
		title : 'Iphone 7 32 GB',
		price : '54000',
		imgUrl : 'https://goo.gl/CRqsdC'
	},
	{
		id : '8',
		title : 'oppo f1s',
		price : '17500',
		imgUrl : 'https://goo.gl/S9YXQV'
	}
	];

    $scope.productsInCart =[];
	$scope.add_to_cart = function(get_product_id) {
		$scope.productsInCart.push(get_product_id);
		$scope.cartCount = $scope.cartCount+1; 
		console.log($scope.productsInCart);
	}

});