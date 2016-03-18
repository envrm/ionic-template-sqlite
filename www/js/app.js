var db = null;

angular.module('example', ['ionic', 'ngCordova', 'example.routes'])

.run(function($ionicPlatform, $rootScope, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    db = $cordovaSQLite.openDB("test.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS test_table (id integer primary key, item1 text, item2 text)");
  });
})

.controller("ExampleController", function($scope, $cordovaSQLite) {
    $scope.insert = function(item1, item2) {
        var query = "INSERT INTO test_table (item1, item2) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [item1, item2]).then(function(res) {
            var message = "INSERT ID -> " + res.insertId;
            console.log(message);
            alert(message);
        }, function (err) {
            console.error(err);
            alert(err);
        });
    }
 
    $scope.select = function(item2) {
        var query = "SELECT item1, item2 FROM test_table WHERE item2 = ?";
        $cordovaSQLite.execute(db, query, [item2]).then(function(res) {
            if(res.rows.length > 0) {
                var message = "SELECTED -> " + res.rows.item(0).item1 + " " + res.rows.item(0).item2;
                alert(message);
                console.log(message);
            } else {
                alert("No results found");
                console.log("No results found");
            }
        }, function (err) {
            alert(err);
            console.error(err);
        });
    }
});
