var app = angular.module('MyApp',[]);
app.controller('formController', function($scope)

{

$scope.submitForm= function(isValid)
{
    if(isValid)
        {
            alert('our form is amazing');
        }
    
}

}
              
        
);