export function AlertMessage(message) {
  window.alert(
    message
  );
}

export function ConfirmMessage(message) {
  const userSelectBool = window.confirm(message);
  return (userSelectBool);
}