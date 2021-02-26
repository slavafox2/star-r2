let initForNumber = 0;

let reducer = (status, value = 0) => {
  if (status === "int") {
    return value++;
  }
};

console.log(reducer({ type: "int" }, initForNumber));

const mapStateToProps = (state_CurrentStateFromReduxStore) => {
return {
    counter: state_CurrentStateFromReduxStore,
}
};

export default connect()(nameCounterComponent);