export default function Alert({ ratio = 1 }) {
  return (
    <>
      <span
        data-uk-spinner={"ratio: " + ratio}
        className="uk-text-primary"
      ></span>
    </>
  );
}
