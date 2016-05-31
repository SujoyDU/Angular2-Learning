import { Component } from '@angular/core';

export interface chart {
  width: number;
  height: number;
  transitionDuration: number;
  xAxisLabel? : string;
  yAxisLable? :string;
  dimension():void;
  group():void;
  title():void;
  isRenderTitle:boolean;

  // var yearlyDimension = ndx.dimension(function (d) {
  //     return d3.time.year(d.dd);
  // });
  //

}
