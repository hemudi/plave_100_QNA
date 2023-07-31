export async function getQNA(no: number) {
  return await (await fetch(`http://localhost:3000/api/answer/${no}`)).json();
}
