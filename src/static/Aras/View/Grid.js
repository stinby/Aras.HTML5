/*
  Aras.HTML5 provides a HTML5 client library to build Aras Innovator Applications

  Copyright (C) 2015 Processwall Limited.

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see http://opensource.org/licenses/AGPL-3.0.
 
  Company: Processwall Limited
  Address: The Winnowing House, Mill Lane, Askham Richard, York, YO23 3NW, United Kingdom
  Tel:     +44 113 815 3440
  Email:   support@processwall.com
*/

define([
	'dojo/_base/declare',
	'dojo/_base/lang',
	'dojo/when',
	'dgrid/Grid',
	'dgrid/extensions/DijitRegistry',
	'dijit/layout/BorderContainer',
	'./Control'
], function(declare, lang, when, Grid, DijitRegistry, BorderContainer, Control) {
	
	return declare('Aras.View.Grid', [BorderContainer, Control], {
			
		_grid: null,
		
		constructor: function() {
			
		},
		
		startup: function() {
			this.inherited(arguments);
			
			// Create Grid
			var GridConstructor = new declare([Grid, DijitRegistry]);
			this._grid = new GridConstructor();
			this.addChild(this._grid);
		},
		
		OnViewModelChange: function(name, oldValue, newValue) {
			this.inherited(arguments);
			
			console.debug('Grid vm change');
			
			// Set Grid ViewModel
			when(this.ViewModel, lang.hitch(this, function(viewmodel){
				
			}));
		}
		
	});
});