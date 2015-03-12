# Polymer Meteor

###### A Better Meteor

Replaces Blaze and Spacebars with Polymer

## Get started

    git clone git@github.com:synka/meteor-polymer.git
    cd meteor-polymer
    meteor

## To add components:

    bower install Polymer/paper-button --save

Add to imports.html:

    <link rel="import" href="/components/paper-button/paper-button.html">

## Example

There is a leaderboard app at the example branch.

[polymer-leaderboard.meteor.com](http://polymer-leaderboard.meteor.com/)

## How it works

The default meteor packages blaze, spacebars, and templating are replaced locally. 
Instead [differential/vulcanize](https://atmospherejs.com/differential/vulcanize) 
is used to process components. There is also a local package named polymer that 
parses html files for `head` and `body` tags.

## Meteor components

There are some built in components made by @atoy40, taken from 
[meteor-polymer-music](https://github.com/atoy40/meteor-polymer-music) 

### meteor-status

A reactive binding to Meteor.status().

	<meteor-status status="{{status}}"></meteor-status>

### meteor-collection

Create a Mongo collection.

	<meteor-collection name="players" ref="{{collection}}"></meteor-collection>

### meteor-subscribe

Subscribe to a server publication.

	<meteor-subscribe name="players"></meteor-subscribe>

### meteor-query

Query and observe a collection.

	<meteor-query collection="{{collection}}" options="{{options}}" data="{{players}}"></meteor-query>
