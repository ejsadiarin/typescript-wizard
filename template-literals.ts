type Handlers = keyof HTMLElement & `on${string}`;

type Obj = Record<Handlers, any>;
// or
type ObjUsingPick = Pick<HTMLElement, Handlers>;
