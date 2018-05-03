angular.module("myapp",[]).controller('HeaderController', ['$scope', function ($scope) {
	$scope.data= {
		title: 'Thanh dep trai',
		summary: 'Dep nhat he mat troi'
	};
}]).controller('ContentController', ['$scope', function ($scope) {
	$scope.data= {
		name: 'Cả nhả',
		ket: 'bạn hiền'
	}
}]).controller('InfoController', ['$scope', function ($scope) {
	$scope.abc= {
		fullname: 'Trần Thành',
		email: 'barneytran@gmail.com',
		phone: '0903660425',
		topic: 'Con mèo già',
		website: 'www.meogia.com'
	}
}]).controller('TestController', ['$scope', function ($scope) {
	$scope.test= function(){
		$scope.greeting= 'Xin chào ' + $scope.txtUser + ' đã đến với chúng tôi !';
	};
}]).controller('ParentController', ['$scope', function ($scope) {
	$scope.name= 'Barney Trần';
	
}]).controller('OneController', ['$scope', function ($scope) {
	$scope.name= 'Bánh bèo';
	
}]).controller('TwoController', ['$scope', function ($scope) {
	$scope.name= 'Bột lọc';
	
}])