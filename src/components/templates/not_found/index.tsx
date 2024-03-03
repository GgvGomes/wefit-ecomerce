import { NotifyCustomer } from "@organisms/notify_customer";

export function NotFound() {
  return (
    <NotifyCustomer
      text="Parece que não há nada por aqui :("
      src="/not_found.png"
      to=""
    />
  );
}
