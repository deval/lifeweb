(function(){
  var toJson = function(res){ return res.json(); };

  window.cy = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'grid'
    },

    style: fetch('cy-style.json').then(toJson),
    elements: fetch('cy-elements.json').then(toJson)
    
  });
})();
