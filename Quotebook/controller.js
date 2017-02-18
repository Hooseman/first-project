angular.module('quoteBook').controller('mainController', function($scope, mainService) {
    $scope.getQuotes = function() {
        $scope.quotes = mainService.getQuotes();
    }
    $scope.getQuotes();

    $scope.addQuote = function() {
        $scope.quotes.push($scope.newQuote)
        $scope.newQuote = '';
    }

    $scope.deleteMe = function(textToDelete) {
        mainService.removeData(textToDelete);
    }

    $scope.addQuote = function() {
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        }
        console.log(newQuote);
        if (mainService.addData(newQuote)) {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    }

});
