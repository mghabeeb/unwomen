// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic-numberpicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      //StatusBar.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider
  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.expense-detail', {
      url: '/dash/1',
      views: {
        'tab-dash': {
          templateUrl: 'templates/expense-detail.html',
          controller: 'ExpenseDetailCtrl'
        }
      }
    })

    .state('tab.savings', {
      url: '/dash/2',
      views: {
        'tab-dash': {
          templateUrl: 'templates/savings.html',
          controller: 'SavingsCtrl'
        }
      }
    })

    .state('tab.savingsreward', {
      url: '/dash/3',
      views: {
        'tab-dash': {
          templateUrl: 'templates/savingsreward.html'
        }
      }
    })


  .state('tab.feedfriends', {
      url: '/feed/1',
      views: {
        'tab-feed': {
          templateUrl: 'templates/feedfriends.html'
        }
      }
    })


  .state('tab.feed', {
      url: '/feed',
      views: {
        'tab-feed': {
          templateUrl: 'templates/tab-feed.html'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/feed/:chatId',
      views: {
        'tab-feed': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
   .state('tab.goals', {
      url: '/goals',
      views: {
        'tab-goals': {
          templateUrl: 'templates/tab-goal.html',
          controller: 'GoalCtrl'
        }
      }
    })
    .state('tab.goals-detail', {
      url: '/goals/1',
      views: {
        'tab-goals': {
          templateUrl: 'templates/goals-detail.html',
          controller: 'GoalDetailCtrl'
        }
      }
    })
    .state('tab.goals-priority', {
      url: '/goals/2',
      views: {
        'tab-goals': {
          templateUrl: 'templates/goals-priority.html',
          controller: 'GoalPriorityCtrl'
        }
      }
    })



  .state('tab.me', {
    url: '/me',
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-me.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
  $ionicConfigProvider.tabs.position('bottom');

});
