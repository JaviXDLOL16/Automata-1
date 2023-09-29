const transiciones = {
  'q0': {'2':'q1','1':'q9','C':'q18','D':'q25','0':'q31','S':'q38'},
  'q1': {'2':'q2'},
  'q2': {'E':'q3'},
  'q3': {'1':'q4'},
  'q4': {'3':'q5'},
  'q5': {'1':'q6'},
  'q6': {'S':'q7'},
  'q7': {'1':'q8'},
  'q9': {'1':'q10'},
  'q10': {'4':'q11'},
  'q11': {'E':'q12'},
  'q12': {'Z':'q13'},
  'q13': {'0':'q14'},
  'q14': {'3':'q15'},
  'q15': {'9':'q16'},
  'q16': {'A':'q17'},
  'q18': {'M':'q19'},
  'q19': {'X':'q20'},
  'q20': {'A':'q21'},
  'q21': {'0':'q22'},
  'q22': {'0':'q23'},
  'q23': {'5':'q24'},
  'q25': {'4':'q26'},
  'q26': {'3':'q27'},
  'q27': {'5':'q28'},
  'q28': {'5':'q29'},
  'q29': {'2':'q30'},
  'q31': {'7':'q32'},
  'q32': {'8':'q33'},
  'q33': {'6':'q34'},
  'q34': {'D':'q35'},
  'q35': {'2':'q36'},
  'q36': {'1':'q37'},
  'q38': {'2':'q39'},
  'q39': {'3':'q40','2':'q51'},
  'q40': {'0':'q41'},
  'q41': {'6':'q42','1':'q47'},
  'q42': {'4':'q43'},
  'q43': {'4':'q44'},
  'q44': {'4':'q45'},
  'q45': {'4':'q46'},
  'q47': {'2':'q48'},
  'q48': {'6':'q49'},
  'q49': {'0':'q50'},
  'q51': {'0':'q52'},
  'q52': {'5':'q53','1':'q57'},
  'q53': {'1':'q54'},
  'q54': {'7':'q55'},   
  'q55': {'0':'q56'},
  'q57': {'1':'q58'},
  'q58': {'8':'q59'},
  'q59': {'3':'q60'},

};

class Automata {
  constructor() {
    this.initialState = "q0";
    this.state = this.initialState;
    this.finalStates = new Set([
      "q8",
      "q17",
      "q24",
      "q30",
      "q37",
      "q46",
      "q50",
      "q56",
      "q60",

    ]);
    this.transitionMap = transiciones;
  }

  transition(symbol) {
    const nextState = this.transitionMap[this.state]?.[symbol];
    if (nextState) {
      this.state = nextState;
      return true;
    }
    return false;
  }

  evaluate(input) {
    const history = [this.state];
    for (const char of input) {
      if (!this.transition(char)) break;
      history.push(this.state);
    }
    const accepted = this.finalStates.has(this.state);
    this.reset();
    return { accepted, history };
  }

  reset() {
    this.state = this.initialState;
  }
}

export function Validation(input) {
  const automata = new Automata();
  return automata.evaluate(input);
}