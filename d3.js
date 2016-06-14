// var width = 960,
//     height = 500;
// // var links = [
// //     {source: 0, target: 1}
// // ];


// var nodes = data.nodes,
//     links = data.links;

// var force = d3.layout.force()
//     .size([width, height])
//     .nodes(nodes)
//     .links(links);

// // force.linkDistance(width/3.05);


// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// var link = svg.selectAll('.link')
//     .data(links)
//     .enter().append('line')
//     .attr('class', 'link')
//     .attr('x1', function(d){return nodes[d.source].x;})
//     .attr('y1', function(d){return nodes[d.source].y;})
//     .attr('x2', function(d){return nodes[d.target].x;})
//     .attr('y2', function(d){return nodes[d.target].y;});

// var node = svg.selectAll('.node')
//     .data(nodes)
//     .enter().append('circle')
//       .attr('class', 'node')
//       .attr('r', width/100)
//       .attr('cx', function(d){return d.x;})
//       .attr('cy', function(d){return d.y;})




// force.on("tick", function() {
//     link.attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });

//     node.attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//   });
function renderViz() {
  var width = 960,
    height = 500;


var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(200)
    .size([width, height]);

var svg = d3.select("#viz-container").append("svg")
    .attr("width", width)
    .attr("height", height);


  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
      .enter().append('g');

  var circle = node.append("circle")
      .attr("r", function(d){
        return d.size * 4.5;
      })
      .style("fill", function(d) { return '#06D6A0'; })
      .attr("id", function(d){return d.name})
      .call(force.drag);

  var textEl=node.append("text")
      .text(function(d) { return d.name; });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    circle.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    textEl.attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; });
  });
}
// });
