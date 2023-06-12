export function tohhmm(data: string): string {
  const time = data.split(":");

  return `${time[0]}:${time[1]}`;
}
