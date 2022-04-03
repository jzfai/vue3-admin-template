declare let foo: number;


declare function greet(greeting: string): void;


declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}


declare class Greeter {
  constructor(greeting: string);

  greeting: string;
  showGreeting(): void;
}
