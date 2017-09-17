export interface CounterGateway {
  increment(): void;
  decrement(): void;
  reset(): void;
}
