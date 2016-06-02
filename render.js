function render_bar(dataset)
{			
		svg.append("g")
		.append("rect")
		.attr("x",0)
		.attr("y",0)
		.attr("width",width)
		.attr("height",height)
		.style("fill","#FFF")
		.style("stroke-width",2)
		.style("stroke","#E7E7E7");	

		svg.append("g")
			.attr("id","bars1")
			.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("x",function(d,i){
		   		return xAxisScale(parseDate(d.date)) + margin.left;
		   })
		   .attr("y",function(d){
				return zeroline  - yScale(d.pv);
		   })
		   .attr("width",barwidth-gap)
		   .attr("height",function(d){
		   		return yScale(d.pv);
		   })
		   .attr("fill",function(d){
		   		return colorScale1(d.pv);
		   });
		svg.select("#bars1")
			.selectAll("rect")
		   .on("mouseover", function(d) { 

					//Get this circle's cx/cy values, then augment for the tooltip
					var xPosition = parseFloat(d3.select(this).attr("x")) + 3 * parseFloat(d3.select(this).attr("width")) ;
					var yPosition = parseFloat(d3.select(this).attr("y")) ;

					//Update the tooltip position and value
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value")
						.text(d.date);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#name")
						.text(d.comment);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value1")
						.text(d.pv);
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value2")
						.text(d.nv);
			   
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
		   })
		   .on("mouseout", function() {
		   
				//Hide the tooltip
				d3.select("#tooltip")
					.classed("hidden", true);
		   });

		svg.append("g")
			.attr("id","bars2")
			.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")	   
		   .attr("x",function(d,i){
		   		return xAxisScale(parseDate(d.date)) + margin.left;
		   })
		   .attr("y",function(d){
				return zeroline;
		   })
		   .attr("width",barwidth-gap)
		   .attr("height",function(d){
		   		return yScale(d.nv);
		   })
		   .attr("fill",function(d){
		   		return colorScale2(d.nv);
		   });

		   svg.select("#bars2")
			.selectAll("rect")
		   .on("mouseover", function(d) { 

					
					var xPosition = parseFloat(d3.select(this).attr("x")) + 3 * parseFloat(d3.select(this).attr("width")) ;
					var yPosition = parseFloat(d3.select(this).attr("y")) ;

					//Update the tooltip position and value
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value")
						.text(d.date);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#name")
						.text(d.comment);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value1")
						.text(d.pv);
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value2")
						.text(d.nv);
			   
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
		   })
		   .on("mouseout", function() {
		   
				//Hide the tooltip
				d3.select("#tooltip")
					.classed("hidden", true);

				
		   });
		svg.append("g")
			.attr("id","circles1")
			.selectAll("circle")
		   .data(dataset)
		   .enter()
		   .append("circle")
		   .attr("cx",function(d,i){
		   		return xAxisScale(parseDate(d.date)) + margin.left + 1;
		   })
		   .attr("cy",function(d,i){
				return zeroline - yScale(d.pv);
		   })
		   .attr("r",function(d){
		   		return rScale(d.pv)
		   })
		   .attr("fill",function(d,i){
		   		if(d.pv > 0.3)
		   			return colorScale1(1);
		   		else
		   			return colorScale1(d.pv);
		   })
		   .on("mouseover", function(d) {

					
					var xPosition = parseFloat(d3.select(this).attr("cx")) ;
					var yPosition = parseFloat(d3.select(this).attr("cy")) ;

					//Update the tooltip position and value
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value")
						.text(d.date);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#name")
						.text(d.comment);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value1")
						.text(parseFloat(d.pv).toFixed(2));
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value2")
						.text(parseFloat(d.nv).toFixed(2));
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
		   })
		   .on("mouseout", function() {
				//Hide the tooltip
				d3.select("#tooltip")
					.classed("hidden", true);
		   })
		   ;
		svg.append("g")
			.attr("id","circles2")
			.selectAll("circle")
		   .data(dataset)
		   .enter()
		   .append("circle")
		   .attr("cx",function(d,i){
		   		return xAxisScale(parseDate(d.date)) + margin.left + 1;
		   })
		   .attr("cy",function(d,i){
				return zeroline + yScale(d.nv)
		   })
		   .attr("r",function(d){
		   		return rScale(d.nv)
		   })
		   .attr("fill",function(d,i){
		   		if(d.nv > 0.3)
		   			return colorScale2(1);
		   		else
		   			return colorScale2(d.nv);
		   })
		   .on("mouseover", function(d) {

					
					var xPosition = parseFloat(d3.select(this).attr("cx")) ;
					var yPosition = parseFloat(d3.select(this).attr("cy")) ;

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value")
						.text(d.date);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#name")
						.text(d.comment);

					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value1")
						.text(parseFloat(d.pv).toFixed(2));
					d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")				
						.select("#value2")
						.text(parseFloat(d.nv).toFixed(2));
			   
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
		   })
		   .on("mouseout", function() {
				//Hide the tooltip
				d3.select("#tooltip")
					.classed("hidden", true);
		   })
		   ;
	svg.append("text")
	    .attr("class", "label")
	    .attr("text-anchor", "start")
	    .attr("x", margin.left+5)
	    .attr("y",margin.top+10)
	    .text("Positive");

	svg.append("text")
	    .attr("class", "label")
	    .attr("text-anchor", "start")
	    .attr("x", margin.left+5)
	    .attr("y",height - margin.bottom )
	    .text("Negative");

	svg.append("text")
	    .attr("class", "label")
	    .attr("text-anchor", "start")
	    .attr("x", width - margin.right + 5)
	    .attr("y",zeroline + 15)
	    .text("Date");

}