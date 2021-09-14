export default function Alert({ message, title, type, onClose }) {
  function handleOnClose() {
    setTimeout(onClose, 500);
  }

  return (
    <>
      {message && (
        <div data-uk-alert>
          <a class="uk-alert-close" data-uk-close></a>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
