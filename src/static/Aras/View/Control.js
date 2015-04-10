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
	'dojo/Stateful',
	'dojo/_base/lang'
], function(declare, Stateful, lang) {
	
	return declare('Aras.View.Control', [Stateful], {
		
		ViewModel: null, 
				
		constructor: function() {

		},
		
		startup: function() {
			this.inherited(arguments);
	
			// Watch ViewModel
			this.watch("ViewModel", lang.hitch(this, this.OnViewModelChange));
		},
		
		OnViewModelChange: function(name, oldValue, newValue) {

		}
		
	});
});