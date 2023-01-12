export async function dynamic() {
  await import("./greet");
  return "dynamic function";
}
