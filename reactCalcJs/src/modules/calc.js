const InputType = {
  Numerical: "Numerical",
  Operator: "Operator",
};

const OperatorType = {
  Add: "add",
  Substract: "substract",
  Equals: "equals",
};

const getOperationsBuilder = (inputs = []) => {
  return inputs.reduce(
    (builder, input) => {
      switch (input.type) {
        case InputType.Numerical: {
          const prevValue = builder.working?.value || 0;
          const newValue = prevValue * 10 + input.value;
          return {
            ...builder,
            working: { ...builder.working, value: newValue },
          };
        }

        case InputType.Operator: {
          if (input.operator === OperatorType.Equals) {
            return {
              operations: [
                ...builder.operations,
                builder.working,
                { operator: OperatorType.Equals, value: 0 },
              ],
              working: { operator: input.operator, value: 0 },
            };
          } else {
            return {
              operations: [...builder.operations, builder.working],
              working: { operator: input.operator, value: 0 },
            };
          }
        }

        default:
          return builder;
      }
    },
    {
      operations: [],
      working: { operator: OperatorType.Add, value: 0 },
    }
  );
};

const getTotal = (operations) =>
  operations.reduce((sum, operation) => {
    switch (operation.operator) {
      case OperatorType.Add:
        return sum + operation.value;

      case OperatorType.Substract:
        return sum - operation.value;

      case OperatorType.Equals:
        return sum;

      default:
        return sum;
    }
  }, 0);

const getState = (inputs) => {
  const builder = getOperationsBuilder(inputs);
  const { operations } = builder;
  const lastOperation =
    operations.length > 0 ? operations[operations.length - 1] : null;

  if (!lastOperation) return { displayValue: builder.working.value };

  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  const total = getTotal(operations);

  switch (lastOperation.operator) {
    case OperatorType.Equals:
      return { displayValue: total };

    default:
      return {
        displayValue:
          lastInput && lastInput.type === InputType.Numerical
            ? builder.working.value
            : total,
      };
  }
};

const Calc = {
  getOperationsBuilder,
  getState,
};

export default Calc;
export { InputType, OperatorType };
