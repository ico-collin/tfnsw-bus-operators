import { Operator, ErrorState } from './'

export interface OperatorsState {
  operators: Operator[];
  error: ErrorState;
}
