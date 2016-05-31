dc.pieChart("#gain-loss-chart", "chartGroup")
    .width(200) // (optional) define chart width, :default = 200
    .height(200) // (optional) define chart height, :default = 200
    .transitionDuration(500) // (optional) define chart transition duration, :default = 350
    // (optional) define color array for slices
    .colors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
    // (optional) define color domain to match your data domain if you want to bind data or color
    .colorDomain([-1750, 1644])
    // (optional) define color value accessor
    .colorAccessor(function(d, i){return d.value;})
    .radius(90) // define pie radius
    // (optional) if inner radius is used then a donut chart will
    // be generated instead of pie chart
    .innerRadius(40)
    .dimension(gainOrLoss) // set dimension
    .group(gainOrLossGroup) // set group
    // (optional) by default pie chart will use group.key as it's label
    // but you can overwrite it with a closure
    .label(function(d) { return d.data.key + "(" + Math.floor(d.data.value / all.value() * 100) + "%)"; })
    // (optional) whether chart should render labels, :default = true
    .renderLabel(true)
    // (optional) by default pie chart will use group.key and group.value as its title
    // you can overwrite it with a closure
    .title(function(d) { return d.data.key + "(" + Math.floor(d.data.value / all.value() * 100) + "%)"; })
    // (optional) whether chart should render titles, :default = false
    .renderTitle(true);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

dc.barChart("#volume-month-chart")
    .width(990) // (optional) define chart width, :default = 200
    .height(250) // (optional) define chart height, :default = 200
    .transitionDuration(500) // (optional) define chart transition duration, :default = 500
    // (optional) define margins
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(volumeByMonth) // set dimension
    .group(volumeByMonthGroup) // set group
    // (optional) whether chart should rescale y axis to fit data, :default = false
    .elasticY(true)
    // (optional) when elasticY is on whether padding should be applied to y axis domain, :default=0
    .yAxisPadding(100)
    // (optional) whether chart should rescale x axis to fit data, :default = false
    .elasticX(true)
    // (optional) when elasticX is on whether padding should be applied to x axis domain, :default=0
    .xAxisPadding(500)
    // define x scale
    .x(d3.time.scale().domain([new Date(1990, 12, 1), new Date(2013, 5, 31)]))
    // (optional) set filter brush rounding
    .round(d3.time.month.round)
    // define x axis units
    .xUnits(d3.time.months)
    // (optional) whether bar should be center to its x value, :default=false
    .centerBar(true)
    // (optional) set gap between bars manually in px, :default=2
    .barGap(1)
    // (optional) render horizontal grid lines, :default=false
    .renderHorizontalGridLines(true)
    // (optional) render vertical grid lines, :default=false
    .renderVerticalGridLines(true)
    // (optional) add stacked group and custom value retriever
    .stack(monthlyMoveGroup, function(d){return d.value;})
    // (optional) you can add multiple stacked group with or without custom value retriever
    // if no custom retriever provided base chart's value retriever will be used
    .stack(monthlyMoveGroup)
    // (optional) whether this chart should generate user interactive brush to allow range
    // selection, :default=true.
    .brushOn(true)
    // (optional) whether svg title element(tooltip) should be generated for each bar using
    // the given function, :default=no
    .title(function(d) { return "Value: " + d.value; })
    // (optional) whether chart should render titles, :default = false
    .renderTitle(true);

//////////////////////////////////////////////////
//////////////////////////////////////////////////

dc.lineChart("#monthly-move-chart", "chartGroup")
    .width(990) // (optional) define chart width, :default = 200
    .height(200) // (optional) define chart height, :default = 200
    .transitionDuration(500) // (optional) define chart transition duration, :default = 500
    // (optional) define margins
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(monthlyMove) // set dimension
    .group(monthlyMoveGroup) // set group
    // (optional) whether chart should rescale y axis to fit data, :default = false
    .elasticY(true)
    // (optional) when elasticY is on whether padding should be applied to y axis domain, :default=0
    .yAxisPadding(100)
    // (optional) whether chart should rescale x axis to fit data, :default = false
    .elasticX(true)
    // (optional) when elasticX is on whether padding should be applied to x axis domain, :default=0
    .xAxisPadding(500)
    // define x scale
    .x(d3.time.scale().domain([new Date(1985, 0, 1), new Date(2013, 11, 31)]))
    // (optional) set filter brush rounding
    .round(d3.time.month.round)
    // define x axis units
    .xUnits(d3.time.months)
    // (optional) render horizontal grid lines, :default=false
    .renderHorizontalGridLines(true)
    // (optional) render vertical grid lines, :default=false
    .renderVerticalGridLines(true)
    // (optional) render as area chart, :default = false
    .renderArea(true)
    // (optional) add stacked group and custom value retriever
    .stack(monthlyMoveGroup, function(d){return d.value;})
    // (optional) you can add multiple stacked group with or without custom value retriever
    // if no custom retriever provided base chart's value retriever will be used
    .stack(monthlyMoveGroup)
    // (optional) whether this chart should generate user interactive brush to allow range
    // selection, :default=true.
    .brushOn(true)
    // (optional) whether dot and title should be generated on the line using
    // the given function, :default=no
    .title(function(d) { return "Value: " + d.value; })
    // (optional) whether chart should render titles, :default = false
    .renderTitle(true)
    // (optional) radius used to generate title dot, :default = 5
    .dotRadius(10);

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////


dc.bubbleChart("#yearly-bubble-chart", "chartGroup")
        .width(990) // (optional) define chart width, :default = 200
        .height(250) // (optional) define chart height, :default = 200
        .transitionDuration(1000) // (optional) define chart transition duration, :default = 1000
        // (optional) define margins
        .margins({top: 10, right: 50, bottom: 30, left: 40})
        .dimension(yearlyDimension) // set dimension
        /* Bubble chart expect the groups are reduced to multiple values which would then be used
         * to generate x, y, and radius for each key (bubble) in the group */
        .group(yearlyPerformanceGroup)
        // (optional) define color function or array for bubbles
        .colors(["red", "#ccc","steelblue","green"])
        // (optional) define color domain to match your data domain if you want to bind data or color
        .colorDomain([-1750, 1644])
        // (optional) define color value accessor
        .colorAccessor(function(d, i){return d.value.absGain;})
        // closure used to retrieve x value from multi-value group
        .keyAccessor(function(p) {return p.value.absGain;})
        // closure used to retrieve y value from multi-value group
        .valueAccessor(function(p) {return p.value.percentageGain;})
        // closure used to retrieve radius value from multi-value group
        .radiusValueAccessor(function(p) {return p.value.fluctuationPercentage;})
        // set x scale
        .x(d3.scale.linear().domain([-2500, 2500]))
        // set y scale
        .y(d3.scale.linear().domain([-100, 100]))
        // (optional) whether chart should rescale y axis to fit data, :default = false
        .elasticY(true)
        // (optional) when elasticY is on whether padding should be applied to y axis domain, :default=0
        .yAxisPadding(100)
        // (optional) whether chart should rescale x axis to fit data, :default = false
        .elasticX(true)
        // (optional) when elasticX is on whether padding should be applied to x axis domain, :default=0
        .xAxisPadding(500)
        // set radius scale
        .r(d3.scale.linear().domain([0, 4000]))
        // (optional) whether chart should render labels, :default = true
        .renderLabel(true)
        // (optional) closure to generate label per bubble, :default = group.key
        .label(function(p) {return p.key.getFullYear();})
        // (optional) whether chart should render titles, :default = false
        .renderTitle(true)
        // (optional) closure to generate title per bubble, :default = d.key + ": " + d.value
        .title(function(p) {
            return p.key.getFullYear()
                    + "\n"
                    + "Index Gain: " + numberFormat(p.value.absGain) + "\n"
                    + "Index Gain in Percentage: " + numberFormat(p.value.percentageGain) + "%\n"
                    + "Fluctuation / Index Ratio: " + numberFormat(p.value.fluctuationPercentage) + "%";
        })
        // (optional) render horizontal grid lines, :default=false
        .renderHorizontalGridLines(true)
        // (optional) render vertical grid lines, :default=false
        .renderVerticalGridLines(true);

////////////////////////////////////////////////
//////////////////////////////////////////////////

<!-- anchor div for data table -->
<div id="data-table">
    <!-- create a custom header -->
    <div class="header">
        <span>Date</span>
        <span>Open</span>
        <span>Close</span>
        <span>Change</span>
        <span>Volume</span>
    </div>
    <!-- data rows will filled in here -->
</div>



dc.dataTable("#data-table")
    // set dimension
    .dimension(dateDimension)
    // data table does not use crossfilter group but rather a closure
    // as a grouping function
    .group(function(d) {
        return d.dd.getFullYear() + "/" + (d.dd.getMonth() + 1);
    })
    // (optional) max number of records to be shown, :default = 25
    .size(10)
    // dynamic columns creation using an array of closures
    .columns([
        function(d) { return d.date; },
        function(d) { return d.open; },
        function(d) { return d.close; },
        function(d) { return Math.floor((d.close - d.open)/d.open*100) + "%"; },
        function(d) { return d.volume; }
    ])
    // (optional) sort using the given field, :default = function(d){return d;}
    .sortBy(function(d){ return d.dd; })
    // (optional) sort order, :default ascending
    .order(d3.ascending
