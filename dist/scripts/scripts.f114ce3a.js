"use strict";angular.module("wttfinalApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","restangular","cfp.loadingBar","com.2fdevs.videogular","com.2fdevs.videogular.plugins.controls","com.2fdevs.videogular.plugins.overlayplay","com.2fdevs.videogular.plugins.poster","countdownTimer"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/s/:no",{templateUrl:"views/s.html",controller:"SCtrl",controllerAs:"s"}).when("/episodeStream",{templateUrl:"views/episodestream.html",controller:"EpisodestreamCtrl",controllerAs:"episodeStream"}).otherwise({redirectTo:"/s/1"})}]),angular.module("wttfinalApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wttfinalApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wttfinalApp").controller("SCtrl",["$scope","Restangular","$routeParams","cfpLoadingBar",function(a,b,c,d){a.no=c.no;var e="https://watchthethrones.herokuapp.com/season/",f=b.oneUrl("droute",e);d.start(),d.inc(),f.getList(c.no).then(function(b){6==c.no&&(a.isSix=!0,console.log("isSIx")),b.sort(function(a,b){return a.episode-b.episode}),a.episodes=b,console.log(b),d.complete()}),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("wttfinalApp").controller("EpisodestreamCtrl",["$sce","$scope",function(a,b){b.src=a.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("wttfinalApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/episodestream.html",'<video width="320" height="240" controls preload="auto"> <source src="{{src}}" type="video/mp4"> Your browser does not support the video tag. </source></video>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Watch The Throne</h1> <p class="lead"> Your one stop for all Game of Thrones downloads! </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Streaming Coming Soon!<span class="glyphicon glyphicon-ok"></span></a></p> <h4>Season 6 coming in</h4> <h3><i countdown end-date="April 24,2016" units="days|hours|minutes|seconds"></i></h3> </div>'),a.put("views/s.html",'<div class="container" style="background: black"> <div class="col-lg-12"> <h2 class="page-header">Season {{no}} Episodes</h2> </div> <div class="container"> <div ng-show="isSix"> <h4>Season 6 coming in</h4> <h3><i countdown end-date="April 24,2016" units="days|hours|minutes|seconds"></i></h3> </div> <div class="row marketing animated zoomInUp" ng-repeat="episode in episodes"> <div class="col-sm-6 col-md-4"> <img class="thumbnail" src="{{episode.thumb}}"> </div> <h4>{{episode.episode}}. {{episode.episodename}}</h4> <p class="desc">{{episode.desc}}</p> <a href="https://watchthethrones.herokuapp.com/{{episode.href480}}" class="btn btn-default" ng-show="episode.href480">480p</a> <a href="https://watchthethrones.herokuapp.com/{{episode.href720}}" class="btn btn-primary" ng-show="episode.href720">720p</a> <a href="{{episode.torrlink480}}" class="btn btn-success" ng-show="episode.torrlink480">Torrent 480p</a> <a href="{{episode.torrlink720}}" class="btn btn-info" ng-show="episode.torrlink720">Torrent 720p</a> </div> </div> </div>')}]);