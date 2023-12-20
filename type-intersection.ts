type Example = 'a' | 1 | 'b';

// gets all the specific type in a union type from type Example
type Result = Example & string;
