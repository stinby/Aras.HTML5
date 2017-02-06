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
	'dojo/_base/lang',
	'dojo/when'
], function(declare, Stateful, lang, when) {
	
	return declare('Aras.View.Control', [Stateful], {
		
		ViewModel: null, 
		
		_viewModelHandle: null,
		
		constructor: function() {

		},
		
		startup: function() {
			this.inherited(arguments);
	
			// Watch ViewModel
			this._viewModelHandle = this.watch("ViewModel", lang.hitch(this, this._onViewModelChange));
		},
	
		destroy: function() {
			this.inherited(arguments);
	
			if (this._viewModelHandle)
			{
				this._viewModelHandle.unwatch();
			}
		},
		
		_onViewModelChange: function(name, oldValue, newValue) {

			this.OnViewModelLoaded();
		},
		
		OnViewModelLoaded: function() {
			
		},
		
		Refresh: function() {
			this.inherited(arguments);
			
			if (this.ViewModel != null)
			{
				this.ViewModel.Refresh.Execute();
			}
		},
		
		Close: function() {
			this.inherited(arguments);
			
			if (this.ViewModel != null)
			{
				this.ViewModel.Close.Execute();
			}
		},
		
		ControlPath: function(ViewModel) {

			// Get path for Control
			var path = ViewModel.Type.replace(/\./g, "/");
			return path;
		},

		ControlParameters: function(ViewModel) {

			var parameters = new Object();
			
			// Region 
			switch(ViewModel.Region)
			{
				case 1:
					parameters['region'] = 'top';
					break;
				case 2:
					parameters['region'] = 'bottom';
					break;
				case 3:
					parameters['region'] = 'right';
					break;
				case 4:
					parameters['region'] = 'left';
					break;
				case 5:
					parameters['region'] = 'center';
					break;
				case 6:
					parameters['region'] = 'leading';
					break;
				case 7:
					parameters['region'] = 'trailing';
					break;
				default:
					parameters['region'] = 'center';
					break;			
			}
			
			// Style
			var style = '';
			
			if (ViewModel.Height != null)
			{
				style = style + 'height:' + ViewModel.Height + 'px;';
			}
	
			if (ViewModel.Width != null)
			{
				style = style + 'width:' + ViewModel.Width + 'px;';
			}
			
			if (style.length > 0)
			{
				parameters['style'] = style;
			}
			
			return parameters;
		}
	});
});