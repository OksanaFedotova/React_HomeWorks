export default function Form() {
  return (
    <>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input id="name"></input>
        <input type="checkbox" checked={false}></input>
      </form>
    </>
  );
}
