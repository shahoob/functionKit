export function greet(name: string, customGreeting?: string) {
  if (customGreeting) {
    return `${customGreeting} ${name}`;
  } else {
    return `Hello ${name}`;
  }
}
