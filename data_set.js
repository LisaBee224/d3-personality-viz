 var data_by_sub = {
    E: 49.3,
    I: 50.7,
    S: 73.3,
    N: 26.7,
    T: 40.2,
    F: 59.8,
    J: 54.1,
    P: 45.9
 }

var graph = {
  "nodes" : [
    {name: "ISTJ", size: 11.6},
    {name: "ISFJ", size: 13.8},
    {name: "INFJ", size: 1.5},
    {name: "INTJ", size: 2.1},
    {name: "ISTP", size: 5.4},
    {name: "ISFP", size: 8.8},
    {name: "INFP", size: 4.4},
    {name: "INTP", size: 3.3},
    {name: "ESTP", size: 4.3},
    {name: "ESFP", size: 8.5},
    {name: "ENFP", size: 8.1},
    {name: "ENTP", size: 3.2},
    {name: "ESTJ", size: 8.7},
    {name: "ESFJ", size: 12.3},
    {name: "ENFJ", size: 2.5},
    {name: "ENTJ", size: 1.8}
  ],
  "links" : [ {"target": 13, "source": 0},
            {"target": 9, "source": 0},
            {"target": 10, "source": 0},
            {"target": 6, "source": 0},
            {"target": 9, "source": 4},
            {"target": 11, "source": 4},
            {"target": 7, "source": 4},
            {"target": 14, "source": 4},
            {"target": 13, "source": 8},
            {"target": 3, "source": 8},
            {"target": 14, "source": 8},
            {"target": 9, "source": 8},
            {"target": 6, "source": 8},
            {"target": 15, "source": 12},
            {"target": 3, "source": 12},
            {"target": 11, "source": 12},
             {"target": 10, "source": 12},
             {"target": 0, "source": 5},
             {"target": 4, "source": 5},
             {"target": 15, "source": 5},
             {"target": 3, "source": 5},
             {"target": 7, "source": 5},
             {"target": 12, "source": 2},
             {"target": 13, "source": 2},
             {"target": 8, "source": 2},
             {"target": 4, "source": 2},
             {"target": 12, "source": 6},
             {"target": 0, "source": 6},
             {"target": 8, "source": 6},
             {"target": 4, "source": 6},
             {"target": 15, "source": 6},
             {"target": 3, "source": 6},
             {"target": 0, "source": 10},
             {"target": 12, "source": 10},
             {"target": 4, "source": 10},
             {"target": 1, "source": 10},
             {"target": 12, "source": 14},
              {"target": 8, "source": 14},
              {"target": 4, "source": 14},
              {"target": 3, "source": 14},
              {"target": 13, "source": 3},
              {"target": 1, "source": 3},
              {"target": 4, "source": 3},
              {"target": 9, "source": 3},
              {"target": 5, "source": 3},
              {"target": 13, "source": 7},
              {"target": 1, "source": 7},
              {"target": 9, "source": 7},
              {"target": 5, "source": 7},
              {"target": 13, "source": 11},
              {"target": 1, "source": 11},
              {"target": 4, "source": 11},
              {"target": 5, "source": 11},
              {"target": 3, "source": 11},
              {"target": 13, "source": 15},
              {"target": 1, "source": 15},
              {"target": 9, "source": 15},
              {"target": 5, "source": 15},
               {"target": 6, "source": 15}
              ]

};

function Collection() {
  this.ei = undefined,
  this.sn = undefined,
  this.tf = undefined,
  this.jp = undefined
}

Collection.prototype.allFull = function() {
  var arr = []
  for (var i in this){
    if (this[i]) {
      if (typeof this[i] === 'string') {
        arr.push(this[i]);
      }
    }
  }
  return arr.length === 4;
}

Collection.prototype.generateType = function() {
  var values = []
  for (var i in this) {
    values.push(this[i]);
  }
  return values.slice(0, 4).join('');
}
