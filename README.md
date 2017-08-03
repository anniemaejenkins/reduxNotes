What is redux?
  Predictable state container for javascript applications. State meaning
    all of the data that flows through the application. It is stored in
      a single object.

What is a reducer?
  A function that returns an object that is a small piece of application state.

Actions will always have a type and maybe have a payload, depending on the
  situation.
  The object returned will be sent to all reducers, whether they care about the
    info or not.
Reducers get two arguments, state and action.
