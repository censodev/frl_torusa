/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function($){"use strict";$.fn.vcRoundChart=function(){var vcwaypoint=void 0!==$.fn.vcwaypoint;return this.each(function(){var data,gradient,chart,i,j,$this=$(this),ctx=$this.find("canvas")[0].getContext("2d"),stroke_width=$this.data("vcStrokeWidth")?parseInt($this.data("vcStrokeWidth"),10):0,options={showTooltips:$this.data("vcTooltips"),animationEasing:$this.data("vcAnimation"),segmentStrokeColor:$this.data("vcStrokeColor"),segmentShowStroke:0!==stroke_width,segmentStrokeWidth:stroke_width,responsive:!0},color_keys=["color","highlight"];for($this.data("chart")&&($this.data("chart").destroy(),$this.removeData("animated")),data=$this.data("vcValues"),ctx.canvas.width=$this.width(),ctx.canvas.height=$this.width(),i=data.length-1;0<=i;i--)for(j=color_keys.length-1;0<=j;j--)"object"==typeof data[i][color_keys[j]]&&2===data[i][color_keys[j]].length&&((gradient=ctx.createLinearGradient(0,0,0,ctx.canvas.height)).addColorStop(0,data[i][color_keys[j]][0]),gradient.addColorStop(1,data[i][color_keys[j]][1]),data[i][color_keys[j]]=gradient);function addchart(){$this.data("animated")||(chart="doughnut"===$this.data("vcType")?new Chart(ctx).Doughnut(data,options):new Chart(ctx).Pie(data,options),$this.data("vcChartId",chart.id),$this.data("chart",chart),$this.data("animated",!0))}vcwaypoint?$this.vcwaypoint($.proxy(addchart,$this),{offset:"85%"}):addchart()}),this},"function"!=typeof window.vc_round_charts&&(window.vc_round_charts=function(model_id){var selector=".vc_round-chart";void 0!==model_id&&(selector='[data-model-id="'+model_id+'"] '+selector),$(selector).vcRoundChart()}),$(document).ready(function(){window.vc_iframe||vc_round_charts()})}(jQuery);