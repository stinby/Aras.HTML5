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
	'dojo/on',
	'../Cell',
	'dijit/form/NumberTextBox'
], function(declare, lang, on, Cell, NumberTextBox) {
	
	return declare('Aras.View.Cells.Decimal', [NumberTextBox, Cell], {
		
		_valueHandle: null,
		
		constructor: function() {

		},
		
		startup: function() {
			this.inherited(arguments);

			// Call Control Startup
			this._startup();
			
			this._updateDecimal();			
		},
		
		destroy: function() {
			this.inherited(arguments);	
			
			if (this._valueHandle)
			{
				this._valueHandle.unwatch();
			}
		},
	
		_updateDecimal: function() {

			if (this.ViewModel != null)
			{
				// Set Min and Max Values
				//this.set("constraints", {min: this.ViewModel.MinValue, max: this.ViewModel.MaxValue});
			
				// Set Value
				this.set("value", this.ViewModel.Value);
			
				if (this._valueHandle)
				{
					this._valueHandle.unwatch();
				}
				
				// Watch for changes in Control value
				this._valueHandle = this.watch('value', lang.hitch(this, function(name, oldValue, newValue) {
		
					if (newValue)
					{
						var newnumber = Number(newValue);
						var currentnumber = Number(this.ViewModel.get('Value'));
				
						if (currentnumber !== newnumber)
						{										
							if (!this._updateFromViewModel)
							{
								// Update ViewModel Value
								this.ViewModel.set('UpdateValue', newnumber);
								this.ViewModel.Write();
							}
						}
					}
				}));
			}
			else
			{
				this.set("value", null);
				
				if (this._valueHandle)
				{
					this._valueHandle.unwatch();
				}
			}
		},
		
		OnViewModelChanged: function(name, oldValue, newValue) {
			this.inherited(arguments);	
			
			// Update Decimal
			this._updateDecimal();	
		}

	});
});