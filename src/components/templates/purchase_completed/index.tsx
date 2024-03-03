import { NotifyCustomer } from "@organisms/notify_customer";

export default function PurchaseCompleted() {
  return (
    <NotifyCustomer
      text="Compra realizada com sucesso!"
      src="/purchase_completed.png"
      to=""
    />
  );
}
