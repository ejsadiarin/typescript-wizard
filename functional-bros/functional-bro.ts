// Functional programming means that functions are PURE
// --> no side effects, 
// --> no mutations, 
// --> functions are immutable.
// --> state does not exist.
// --> idempotent (same input, same output) everytime
/*
 * Other paradigms (for comparison):
 * Imperative programming: state is external to code.
 * Object-oriented programming: state is a part of code.
 * */

// loops like for and while are impossible
// --> because they are not pure.
// --> requires you to mutate some state.
class Receipts {
  userId: number;
  merchant: string;
  initialAmount: number;
  tipAmount: number;
  total: number;
  timestamp: Date;

  constructor(userId, merchant, initialAmount, tipAmount, total, timestamp) {
    this.userId = userId;
    this.merchant = merchant;
    this.initialAmount = initialAmount;
    this.tipAmount = tipAmount;
    this.total = total;
    this.timestamp = timestamp;
  }
}

const ReceiptsObjectForm = {
  userId: 1,
  merchant: '',
  initialAmount: 0,
  tipAmount: 0,
  total: 0,
  timestamp: new Date(),

  // closure
  constructor: () => {
  }
}

function processReceipts(receipts) {
  for (let index = 0; index < receipts.length; index++) {
    const receipt = receipts[index];
    console.log(receipt.merchant);
  }
}
// ----------- //

// How to loop in functional programming 
// --> use recursion (recursion is just a fancy form of iteration)
// --> create a variable for the index
function processReceipt(index: number, receipts: Receipts[], userId: number) {
  if (index < receipts.length) {
    // for each element
    const receipt = receipts[index];
    console.log(receipt.merchant);
  }

  // add a index counter && recursive call with new values as arguments
  processReceipt(index + 1, receipts, userId);
}

// currying --> a function that returns a function
// --> so the returned value is a deep output (values of the inside functions)
// --> results of the deeper call attach to the end
// ex. filtering merchant if userId matches and then return a list of matching receipts
// --> so using a predicate and appending if userId matches

// this is the curried function
function userIdEquals(receipt: Receipts, userId: number): boolean {
  return receipt.userId === userId;
}

// condition here is predicate
// instead of recreating a new function everytime we can just use a predicate
// --> if you want to filter other things, based on a condition ("predicate");
function filter(index: number = 0, receipts: Receipts[], condition: (receipt: Receipts) => boolean): Receipts[] {
  if (index < receipts.length) {
    const filtered = filter(index + 1, receipts, condition);

    const receipt = receipts[index];
    if (condition(receipt)) {
      // filtered.push(receipt); // mutates the original array so we don't want this.
      return [receipt].concat(filtered);
    }

    return filtered;
  }

  return [];
}

const filtered = filter(0, receipts, userIdEquals);

// predicates --> are just "conditions" in functional land.
// --> functions that return a boolean.
