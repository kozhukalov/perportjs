import 'vis/dist/vis.min.css'
import vis from 'vis';
import $ from 'jquery';

var app = function() {
  var nodes = new vis.DataSet([
    {id: 1, label: 'Linux'},
    {id: 2, label: 'Networking'},
    {id: 3, label: 'Business'},
    {id: 4, label: 'Hobby'},
    {id: 5, label: 'Programming'}
  ]);

  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
  ]);

  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
};

$(document).ready(function() {
  app();
});

export default app;
