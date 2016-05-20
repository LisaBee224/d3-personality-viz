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
  "links" : [ {"target": 12, "source": 0},
            {"target": 3, "source": 0},
            {"target": 8, "source": 0},
            {"target": 14, "source": 1},
            {"target": 10, "source": 1},
            {"target": 11, "source": 2},
            {"target": 12, "source": 3},
            {"target": 4, "source": 3},
            {"target": 12, "source": 4},
            {"target": 3, "source": 4},
            {"target": 8, "source": 4},
            {"target": 8, "source": 5},
            {"target": 9, "source": 5},
            {"target": 8, "source": 6},
            {"target": 7, "source": 6},
            {"target": 3, "source": 6},
             {"target": 12, "source": 7},
             {"target": 0, "source": 7},
             {"target": 3, "source": 7},
             {"target": 8, "source": 7},
             {"target": 12, "source": 8},
             {"target": 5, "source": 8},
             {"target": 15, "source": 8},
             {"target": 11, "source": 8},
             {"target": 7, "source": 8},
             {"target": 1, "source": 8},
             {"target": 8, "source": 9},
             {"target": 5, "source": 9},
             {"target": 2, "source": 10},
             {"target": 14, "source": 10},
             {"target": 7, "source": 11},
             {"target": 1, "source": 12},
             {"target": 14, "source": 12},
             {"target": 8, "source": 13},
             {"target": 10, "source": 13},
             {"target": 1, "source": 14},
             {"target": 15, "source": 14},
              {"target": 2, "source": 14},
              {"target": 4, "source": 15},
              {"target": 14, "source": 15},
              {"target": 3, "source": 15},
              ]

};

// var data_by_types = {
//   ISTJ: [11.6, "best": {ESTJ, ISTJ, INTJ, ESTP}, "least":{ ESFJ, ESFP, ENFP, INFP}],

//   ISFJ: [13.8, "best": {ENFJ, ESTJ, ISFJ}, "least":{ ENTJ, INTJ, ENTP, ENFP}],

//   INFJ: [1.5, "best": {ENPT, ENFP, INFJ, INFP, ENFJ}, "least":{ ESFJ, ESTJ, ESTP, ISTP}],

//   INTJ: [2.1, "best": {ESTJ, INTJ, ISTP, ESTJ}, "least":{ESFJ, ISFJ, ESTP, INFP, ENTP, INFP,ENFJ}],

//   ISTP: [5.4, "best": {ESTJ, ISTJ, INTJ, ESTP}, "least":{ESFJ, ESFP, ENFP, INFP}],

//   ISFP: [8.8, "best": {ESFP, ISFP}, "least":{ENTJ, INTJ, ENTP, INTP}],

//   INFP: [4.4, "best": {ENTP, INTP, INTJ}, "least":{ESTJ, ESTP, ISTP, IENTJ,INTJ}],

//   INTP: [3.3, "best": {ESTJ, ISTJ, INTJ, ESTP}, "least":{ESFJ, ISFJ, ISTP, ESFP, ISFP}],

//   ESTP: [4.3, "best": {ESTJ, ISFP, ENTJ, ENTP, INTP, ISFJ}, "least":{ESFJ, INTJ, ENFJ, INFP}],

//    ESFP: [8.5, "best": {ESTP, ISFP}, "least":{ISTJ, ISTP, ENTJ, INTP}],
//   ENFP: [8.1, "best": {INFJ, INFP, ENFJ, ENFP}, "least":{ISTJ, ESTJ, ISTP, ESTP, ISFJ}],
//    ENTP: [3.2, "best": {INTP, INF}, "least":{ESFJ, ISFJ, ISTP, ISFP, INTJ}],
//    ESTJ: [8.7, "best": {ISTJ, ESFJ, ISFJ, ENTJ, INTJ, ISTP}, "least":{ESTJ, ESFJ, INFJ, INFP, ENFP}],
//    ESFJ: [12.3, "best": {ESTJ, ENFP}, "least":{ESTP, ENTJ, INTJ, ENTP, INTP, INFJ, ISTP}],
//    ENFJ: [2.5, "best": {ISFJ, ENFJ, ENTJ, INFJ}, "least":{ESTJ, ESTP, ISTP, INTJ}],
//   ENTJ: [1.8, "best": {ISTP, ENTJ, ENFJ, INTJ}, "least":{ ESFJ, ISFJ, ESFP, ISFP, INFP}]
// }

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
