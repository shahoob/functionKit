export function greet(name: string, customGreeting?: string): string {
  if (customGreeting) {
    return `${customGreeting} ${name}`;
  } else {
    return `Hello ${name}`;
  }
}
