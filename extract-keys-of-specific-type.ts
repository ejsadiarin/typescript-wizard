type KeysOfType<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];
type PropsWithType<T, U> = Pick<T, KeysOfType<T, U>>;
type FunctionProps<T> = PropsWithType<T, Function | undefined>;

type Person = {
  name: string;
  age: number;
  greet: () => void;
  job?: () => void;
  address: string;
  hobbies?: string[];
};

type FunctionProperties = FunctionProps<Person>;

// can't do this because Function | undefined are not specific "keys" or "properties"
// Pick generic -> needs specific properties as keys, not their types as second argument
// type FunctionWithPick = Pick<Person, Function | undefined>;

// FunctionProperties will be:
// { greet: () => void, job?: () => void }
