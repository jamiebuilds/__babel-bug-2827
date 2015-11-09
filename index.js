function wrapArgs(asyncFunction) {
  return async (...args) => {
    try {
      // console.log(args.length); // when this line enable, works fine
      await asyncFunction(...args); // not working args is undefined
    } catch (error) {
      args[2](error);
    }
  };
}
